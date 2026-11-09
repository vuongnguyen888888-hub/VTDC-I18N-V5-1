'use client';

import React, { forwardRef, useState, useId } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, HelpCircle, X } from 'lucide-react';
import { VIDCNativeButton, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


export type TextareaType = 'default' | 'tags';

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  typeVariant?: TextareaType;
  label?: string;
  required?: boolean;
  hint?: string;
  errorMessage?: string;
  isDestructive?: boolean;
  helpText?: string;
  tags?: string[];
  onRemoveTag?: (tag: string) => void;
  maxLength?: number;
  showCount?: boolean;
}

/**
 * Textarea input field Master Component (Figma 1238:278 - 14 variants)
 * Types: Default & Tags.
 * Default height: 128px. Symmetrical 8px border radius (var(--vidc-radius-md, 8px)).
 * Supports multiline Vietnamese text, resize control, character count, label, required, hint, error, and help icon.
 */
export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  (
    {
      typeVariant = 'default',
      label,
      required,
      hint,
      errorMessage,
      isDestructive = false,
      helpText,
      tags = [],
      onRemoveTag,
      maxLength,
      showCount = false,
      disabled,
      className,
      id: customId,
      value,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = customId || `vidc-textarea-${generatedId}`;
    const hintId = `${textareaId}-hint`;
    const errorId = `${textareaId}-error`;

    const [isFocused, setIsFocused] = useState(false);
    const isError = isDestructive || Boolean(errorMessage);
    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full space-y-1.5 font-body">
        {/* Label & Help Icon Header */}
        {label && (
          <div className="flex items-center justify-between gap-1.5">
            <label htmlFor={textareaId} className="inline-flex items-center gap-1 vidc-caption font-semibold text-[var(--vidc-text-primary)]">
              <span>{label}</span>
              {required && <span className="text-[var(--vidc-action-primary-default)] font-bold" title="Trường bắt buộc">*</span>}
            </label>

            {helpText && (
              <div className="relative group/help inline-flex items-center">
                <VIDCNativeButton
                  type="button"
                  aria-label={`Trợ giúp cho ${label}`}
                  className="text-[var(--vidc-text-tertiary)] hover:text-[var(--vidc-text-primary)] focus:outline-none rounded-full p-0.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                </VIDCNativeButton>
                <div className="absolute right-0 bottom-full mb-1 hidden group-hover/help:block group-focus-within/help:block z-20 w-48 p-2 vidc-caption text-xs leading-snug bg-slate-900 text-white rounded-md shadow-lg border border-slate-700">
                  {helpText}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Textarea Wrapper */}
        <div
          className={cn(
            'relative w-full transition-all duration-150 p-3',
            'bg-[var(--vidc-surface-default)] text-[var(--vidc-text-primary)] border border-[var(--vidc-border-default)]',
            'rounded-[var(--vidc-radius-md,8px)] min-h-[128px]',
            // Interactive States & Focus Ring (2px border, 2px inner spread canvas, 4px outer spread focus outline)
            isFocused && 'border-[var(--vidc-focus-outline)] shadow-[0_0_0_2px_var(--vidc-surface-canvas),0_0_0_4px_var(--vidc-focus-outline)] outline-none',
            isError && 'border-red-500 text-red-600 dark:text-red-400 shadow-[0_0_0_2px_var(--vidc-surface-canvas),0_0_0_4px_rgba(239,68,68,0.5)]',
            disabled && 'bg-[var(--vidc-surface-subtle)] text-[var(--vidc-text-muted)] cursor-not-allowed opacity-60',
            className
          )}
        >
          {/* Tags Type Variant */}
          {typeVariant === 'tags' && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-2 pb-2 border-b border-[var(--vidc-border-default)]">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-[var(--vidc-surface-subtle)] text-[var(--vidc-text-primary)] border border-[var(--vidc-border-default)] rounded-md"
                >
                  <span>{tag}</span>
                  {onRemoveTag && !disabled && (
                    <VIDCNativeButton
                      type="button"
                      onClick={() => onRemoveTag(tag)}
                      className="hover:text-red-500 focus:outline-none"
                      aria-label={`Xóa thẻ ${tag}`}
                    >
                      <X className="w-3 h-3" />
                    </VIDCNativeButton>
                  )}
                </span>
              ))}
            </div>
          )}

          {/* Real Textarea Element */}
          <VIDCNativeTextarea
            ref={ref}
            id={textareaId}
            value={value}
            rows={rows}
            disabled={disabled}
            maxLength={maxLength}
            aria-disabled={disabled}
            aria-invalid={isError}
            aria-describedby={isError ? errorId : hint ? hintId : undefined}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            className="w-full bg-transparent text-sm text-[var(--vidc-text-primary)] placeholder:text-[var(--vidc-text-tertiary)] focus:outline-none resize-y min-h-[96px]"
            {...props}
          />
        </div>

        {/* Footer: Hint / Error & Character Count */}
        <div className="flex items-center justify-between text-xs font-body">
          <div>
            {hint && !errorMessage && (
              <p id={hintId} className="text-[var(--vidc-text-tertiary)]">
                {hint}
              </p>
            )}

            {errorMessage && (
              <p id={errorId} className="font-medium text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </p>
            )}
          </div>

          {showCount && maxLength && (
            <span className="text-[var(--vidc-text-tertiary)] ml-auto">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TextareaField.displayName = 'TextareaField';
