/**
 * Viettel IDC — Centralized API Client & BFF Boundary (Batch 9)
 * Standardized client with market context headers, error modeling, timeouts, and zero-PII logging.
 */

import { MarketContext } from '@/lib/context/resolveMarketContext';

export type ApiErrorCode =
  | 'network_error'
  | 'timeout'
  | 'validation_error'
  | 'unauthorized'
  | 'forbidden'
  | 'not_found'
  | 'rate_limited'
  | 'server_error'
  | 'unknown_error';

export class ApiError extends Error {
  public code: ApiErrorCode;
  public status?: number;
  public details?: any;

  constructor(message: string, code: ApiErrorCode, status?: number, details?: any) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export interface RequestOptions extends RequestInit {
  timeoutMs?: number;
  context?: MarketContext;
  skipMarketHeaders?: boolean;
}

const DEFAULT_TIMEOUT_MS = 10000; // 10 seconds

/**
 * Standardized API fetch wrapper with timeout, domain/market headers, and error mapping.
 */
export async function apiClient<T = any>(url: string, options: RequestOptions = {}): Promise<T> {
  const { timeoutMs = DEFAULT_TIMEOUT_MS, context, skipMarketHeaders = false, headers = {}, ...rest } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const mergedHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  // Inject standard server-derived MarketContext headers if available
  if (context && !skipMarketHeaders) {
    mergedHeaders['X-Viettel-Market'] = context.marketCode;
    mergedHeaders['X-Viettel-Locale'] = context.locale;
    mergedHeaders['X-Viettel-Site-Group'] = context.siteGroup;
    mergedHeaders['X-Viettel-Currency'] = context.currency;
    mergedHeaders['X-Viettel-Canonical-Host'] = context.canonicalHost;
  }

  try {
    const response = await fetch(url, {
      ...rest,
      headers: mergedHeaders,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorBody: any = null;
      try {
        errorBody = await response.json();
      } catch {
        // Non-JSON response
      }

      let code: ApiErrorCode = 'server_error';
      if (response.status === 400) code = 'validation_error';
      else if (response.status === 401) code = 'unauthorized';
      else if (response.status === 403) code = 'forbidden';
      else if (response.status === 404) code = 'not_found';
      else if (response.status === 429) code = 'rate_limited';

      throw new ApiError(
        errorBody?.message || `API request failed with status ${response.status}`,
        code,
        response.status,
        errorBody
      );
    }

    // Parse JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return (await response.json()) as T;
    }
    return (await response.text()) as unknown as T;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new ApiError(`Request timed out after ${timeoutMs}ms`, 'timeout');
    }
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(error.message || 'Network error encountered', 'network_error');
  }
}
