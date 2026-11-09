'use client';

import React, { forwardRef } from 'react';

export type VIDCButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link' | 'warning' | 'destructive';
export type VIDCButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export interface VIDCButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VIDCButtonVariant;
  size?: VIDCButtonSize;
  loading?: boolean;
}

/** Figma-aligned button primitive. No global styling applied to bespoke service CTAs. */
export const VIDCButton = forwardRef<HTMLButtonElement, VIDCButtonProps>(function VIDCButton(
  { variant = 'primary', size = 'md', loading = false, disabled, className = '', children, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      data-size={size}
      data-loading={loading ? 'true' : undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={`vidc-btn vidc-btn--${variant} ${className}`.trim()}
      {...rest}
    >
      {loading && <span className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true" />}
      {children}
    </button>
  );
});
