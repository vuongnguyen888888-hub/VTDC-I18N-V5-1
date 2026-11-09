/**
 * Viettel IDC — CMS Content Validation Engine (Batch 8)
 * Strict runtime & schema validation to ensure content integrity and security.
 */

import { LOCALE_REGISTRY } from '../../config/localeRegistry';
import {
  MarketCode,
  LocaleCode,
  CmsContentDocument,
  StructuredContentSection,
  StructuredFaqItem,
  StructuredCta,
  StructuredMedia,
} from './contentModel';

export interface ContentValidationError {
  field: string;
  message: string;
  code: string;
}

export interface ContentValidationResult {
  valid: boolean;
  errors: ContentValidationError[];
}

const UNSAFE_URL_PROTOCOLS = ['javascript:', 'data:', 'vbscript:', 'file:'];

/**
 * Validates CTA target URL for safety.
 */
export function validateCtaSafety(cta: StructuredCta): ContentValidationError[] {
  const errors: ContentValidationError[] = [];
  if (cta.targetUrl) {
    const cleanUrl = cta.targetUrl.trim().toLowerCase();
    for (const protocol of UNSAFE_URL_PROTOCOLS) {
      if (cleanUrl.startsWith(protocol)) {
        errors.push({
          field: `cta.${cta.id}.targetUrl`,
          message: `Unsafe URL protocol detected: ${protocol}`,
          code: 'UNSAFE_URL_PROTOCOL',
        });
      }
    }
  }
  return errors;
}

/**
 * Validates Media item for accessibility and schema requirements.
 */
export function validateMedia(media: StructuredMedia, contextPath: string): ContentValidationError[] {
  const errors: ContentValidationError[] = [];
  if (!media.isDecorative && (!media.altText || media.altText.trim().length === 0)) {
    errors.push({
      field: `${contextPath}.altText`,
      message: 'Non-decorative editorial images must provide descriptive alt text.',
      code: 'MISSING_ALT_TEXT',
    });
  }
  if (!media.assetUrl || media.assetUrl.trim().length === 0) {
    errors.push({
      field: `${contextPath}.assetUrl`,
      message: 'Media asset URL is required.',
      code: 'MISSING_MEDIA_URL',
    });
  }
  return errors;
}

/**
 * Validates FAQ items for unique IDs and required fields.
 */
export function validateFaqs(faqs: StructuredFaqItem[]): ContentValidationError[] {
  const errors: ContentValidationError[] = [];
  const seenIds = new Set<string>();

  for (let i = 0; i < faqs.length; i++) {
    const faq = faqs[i];
    const id = faq.id || `faq-${i}`;

    if (seenIds.has(id)) {
      errors.push({
        field: `faqs[${i}].id`,
        message: `Duplicate FAQ ID detected: "${id}"`,
        code: 'DUPLICATE_FAQ_ID',
      });
    }
    seenIds.add(id);

    if (!faq.question || faq.question.trim().length === 0) {
      errors.push({
        field: `faqs[${i}].question`,
        message: 'FAQ question cannot be empty.',
        code: 'EMPTY_FAQ_QUESTION',
      });
    }

    if (!faq.answer || (typeof faq.answer === 'string' && faq.answer.trim().length === 0)) {
      errors.push({
        field: `faqs[${i}].answer`,
        message: 'FAQ answer cannot be empty.',
        code: 'EMPTY_FAQ_ANSWER',
      });
    }
  }

  return errors;
}

/**
 * Validates Sections for unique IDs and order integrity.
 */
export function validateSections(sections: StructuredContentSection[]): ContentValidationError[] {
  const errors: ContentValidationError[] = [];
  const seenSectionIds = new Set<string>();

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    if (seenSectionIds.has(sec.id)) {
      errors.push({
        field: `sections[${i}].id`,
        message: `Duplicate section ID detected: "${sec.id}"`,
        code: 'DUPLICATE_SECTION_ID',
      });
    }
    seenSectionIds.add(sec.id);
  }

  return errors;
}

/**
 * Validates a complete CMS Content Document.
 */
export function validateCmsContentDocument(doc: CmsContentDocument): ContentValidationResult {
  const errors: ContentValidationError[] = [];

  // 1. Identity validation
  if (!doc.entityId || doc.entityId.trim().length === 0) {
    errors.push({ field: 'entityId', message: 'entityId is required.', code: 'MISSING_ENTITY_ID' });
  }

  if (!doc.routeId || doc.routeId.trim().length === 0) {
    errors.push({ field: 'routeId', message: 'routeId is required.', code: 'MISSING_ROUTE_ID' });
  }

  // 2. Market and Locale validation
  if (!doc.marketCode || !['vn', 'int'].includes(doc.marketCode)) {
    errors.push({
      field: 'marketCode',
      message: `Invalid marketCode "${doc.marketCode}". Expected 'vn' | 'int'.`,
      code: 'INVALID_MARKET_CODE',
    });
  }

  if (!doc.locale || !LOCALE_REGISTRY[doc.locale]) {
    errors.push({
      field: 'locale',
      message: `Invalid or unsupported locale "${doc.locale}".`,
      code: 'INVALID_LOCALE',
    });
  }

  // 3. Editorial Metadata validation
  if (!doc.editorial || !doc.editorial.status) {
    errors.push({
      field: 'editorial.status',
      message: 'Editorial publication status is required.',
      code: 'MISSING_EDITORIAL_STATUS',
    });
  }

  // 4. Section validation
  if (doc.sections && Array.isArray(doc.sections)) {
    errors.push(...validateSections(doc.sections));
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
