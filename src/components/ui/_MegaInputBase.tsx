'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


export type MegaInputSize = 'sm' | 'md' | 'lg'; // SM: 64px, MD: 80px, LG: 96px
export type MegaInputState = 'default' | 'filled' | 'focused' | 'disabled' | 'error';

export interface MegaInputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: MegaInputSize;
  state?: MegaInputState;
  isDestructive?: boolean;
}

/**
 * _Mega input field base (Figma 1106:66560 - 12 variants)
 * Internal base digit box component for OTP & Verification Code Inputs.
 * Sizes: SM (64px), MD (80px), LG (96px).
 */
export const MegaInputBase = forwardRef<HTMLInputElement, MegaInputBaseProps>(
  ({ size = 'md', state = 'default', isDestructive = false, className, disabled, value, ...props }, ref) => {
    const isFilled = Boolean(value || value === 0);
    const isError = isDestructive || state === 'error';
    const isDisabled = disabled || state === 'disabled';

    const sizeClasses: Record<MegaInputSize, string> = {
      sm: 'w-[64px] h-[64px] text-xl font-bold rounded-[var(--vidc-radius-lg,12px)]',
      md: 'w-[80px] h-[80px] text-2xl font-bold rounded-[var(--vidc-radius-xl,20px)]',
      lg: 'w-[96px] h-[96px] text-3xl font-bold rounded-[var(--vidc-radius-lg,12px)]',
    };

    return (
      <VIDCNativeInput
        ref={ref}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={1}
        value={value}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-invalid={isError}
        className={cn(
          'vidc-mega-input-base text-center transition-all duration-150 font-body select-none',
          'bg-[var(--vidc-surface-default)] text-[var(--vidc-text-primary)] border border-[var(--vidc-border-default)]',
          'placeholder:text-[var(--vidc-text-tertiary)]',
          sizeClasses[size],
          // State Styling & Focus Ring (2px border, 2px inner spread canvas, 4px outer spread focus outline)
          state === 'focused' && 'border-[var(--vidc-focus-outline)] shadow-[0_0_0_2px_var(--vidc-surface-canvas),0_0_0_4px_var(--vidc-focus-outline)] outline-none',
          isFilled && !isError && 'border-[var(--vidc-border-strong)] bg-[var(--vidc-surface-default)]',
          isError && 'border-red-500 text-red-600 dark:text-red-400 shadow-[0_0_0_2px_var(--vidc-surface-canvas),0_0_0_4px_rgba(239,68,68,0.5)] focus:border-red-500',
          isDisabled && 'bg-[var(--vidc-surface-subtle)] text-[var(--vidc-text-muted)] border-[var(--vidc-border-default)] cursor-not-allowed opacity-60',
          'focus:outline-none focus:border-[var(--vidc-focus-outline)] focus:shadow-[0_0_0_2px_var(--vidc-surface-canvas),0_0_0_4px_var(--vidc-focus-outline)]',
          className
        )}
        {...props}
      />
    );
  }
);

MegaInputBase.displayName = 'MegaInputBase';
