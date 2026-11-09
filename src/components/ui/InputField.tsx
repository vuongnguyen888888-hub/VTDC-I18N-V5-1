'use client';

import React, { forwardRef, useState, useId } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, HelpCircle, X } from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect } from '@/components/ui/VIDCNativeControls';


export type InputFieldSize = 'sm' | 'md'; // SM: 40px, MD: 44px
export type InputFieldType =
  | 'default'
  | 'icon-leading'
  | 'leading-dropdown'
  | 'trailing-dropdown'
  | 'leading-text'
  | 'payment-input'
  | 'tags'
  | 'trailing-button';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputFieldSize;
  typeVariant?: InputFieldType;
  label?: string;
  required?: boolean;
  hint?: string;
  errorMessage?: string;
  isDestructive?: boolean;
  helpText?: string;
  leadingIcon?: React.ReactNode;
  leadingText?: string;
  leadingDropdownOptions?: DropdownOption[];
  leadingDropdownValue?: string;
  onLeadingDropdownChange?: (value: string) => void;
  trailingDropdownOptions?: DropdownOption[];
  trailingDropdownValue?: string;
  onTrailingDropdownChange?: (value: string) => void;
  trailingButtonText?: string;
  onTrailingButtonClick?: () => void;
  tags?: string[];
  onRemoveTag?: (tag: string) => void;
}

/**
 * Input field Master Component (Figma 1090:57817 - 112 variants)
 * Sizes: SM (40px), MD (44px).
 * 8 Types: Default, Icon leading, Leading dropdown, Trailing dropdown, Leading text, Payment input, Tags, Trailing button.
 * Border radius: Symmetrical 8px on all 4 corners (var(--vidc-radius-md, 8px)).
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      size = 'md',
      typeVariant = 'default',
      label,
      required,
      hint,
      errorMessage,
      isDestructive = false,
      helpText,
      leadingIcon,
      leadingText,
      leadingDropdownOptions = [],
      leadingDropdownValue,
      onLeadingDropdownChange,
      trailingDropdownOptions = [],
      trailingDropdownValue,
      onTrailingDropdownChange,
      trailingButtonText,
      onTrailingButtonClick,
      tags = [],
      onRemoveTag,
      disabled,
      className,
      id: customId,
      value,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = customId || `vidc-input-${generatedId}`;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;

    const [isFocused, setIsFocused] = useState(false);
    const isError = isDestructive || Boolean(errorMessage);

    const heightClasses: Record<InputFieldSize, string> = {
      sm: 'h-[40px] text-sm px-3',
      md: 'h-[44px] text-sm px-3.5',
    };

    return (
      <div className="w-full space-y-1.5 font-body">
        {/* Label & Help Icon Header */}
        {label && (
          <div className="flex items-center justify-between gap-1.5">
            <label htmlFor={inputId} className="inline-flex items-center gap-1 vidc-caption font-semibold text-[var(--vidc-text-primary)]">
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

        {/* Input Wrapper */}
        <div
          className={cn(
            'relative flex items-center w-full transition-all duration-150',
            'bg-[var(--vidc-surface-default)] text-[var(--vidc-text-primary)] border border-[var(--vidc-border-default)]',
            'rounded-[var(--vidc-radius-md,8px)]',
            heightClasses[size],
            // Interactive States & Focus Ring (2px border, 2px inner spread canvas, 4px outer spread focus outline)
            isFocused && 'border-[var(--vidc-focus-outline)] shadow-[0_0_0_2px_var(--vidc-surface-canvas),0_0_0_4px_var(--vidc-focus-outline)] outline-none',
            isError && 'border-red-500 text-red-600 dark:text-red-400 shadow-[0_0_0_2px_var(--vidc-surface-canvas),0_0_0_4px_rgba(239,68,68,0.5)]',
            disabled && 'bg-[var(--vidc-surface-subtle)] text-[var(--vidc-text-muted)] cursor-not-allowed opacity-60',
            className
          )}
        >
          {/* Leading Text Variant */}
          {typeVariant === 'leading-text' && leadingText && (
            <span className="shrink-0 text-xs font-medium text-[var(--vidc-text-tertiary)] pr-2 border-r border-[var(--vidc-border-default)] select-none">
              {leadingText}
            </span>
          )}

          {/* Leading Icon Variant */}
          {typeVariant === 'icon-leading' && leadingIcon && (
            <span className="shrink-0 text-[var(--vidc-text-tertiary)] pr-2 select-none flex items-center">
              {leadingIcon}
            </span>
          )}

          {/* Leading Dropdown Variant */}
          {typeVariant === 'leading-dropdown' && leadingDropdownOptions.length > 0 && (
            <VIDCNativeSelect
              value={leadingDropdownValue}
              onChange={(e) => onLeadingDropdownChange?.(e.target.value)}
              disabled={disabled}
              className="shrink-0 bg-transparent text-xs font-semibold text-[var(--vidc-text-primary)] pr-2 border-r border-[var(--vidc-border-default)] focus:outline-none cursor-pointer"
            >
              {leadingDropdownOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </VIDCNativeSelect>
          )}

          {/* Tags Type Variant */}
          {typeVariant === 'tags' && tags.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 pr-2 no-scrollbar">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-[var(--vidc-surface-subtle)] text-[var(--vidc-text-primary)] border border-[var(--vidc-border-default)] rounded-md whitespace-nowrap"
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

          {/* Real Input Element */}
          <VIDCNativeInput
            ref={ref}
            id={inputId}
            value={value}
            disabled={disabled}
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
            className="w-full h-full bg-transparent text-sm text-[var(--vidc-text-primary)] placeholder:text-[var(--vidc-text-tertiary)] focus:outline-none min-w-0"
            {...props}
          />

          {/* Trailing Dropdown Variant */}
          {typeVariant === 'trailing-dropdown' && trailingDropdownOptions.length > 0 && (
            <VIDCNativeSelect
              value={trailingDropdownValue}
              onChange={(e) => onTrailingDropdownChange?.(e.target.value)}
              disabled={disabled}
              className="shrink-0 bg-transparent text-xs font-semibold text-[var(--vidc-text-primary)] pl-2 border-l border-[var(--vidc-border-default)] focus:outline-none cursor-pointer"
            >
              {trailingDropdownOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </VIDCNativeSelect>
          )}

          {/* Trailing Button Variant */}
          {typeVariant === 'trailing-button' && trailingButtonText && (
            <VIDCNativeButton
              type="button"
              disabled={disabled}
              onClick={onTrailingButtonClick}
              className="shrink-0 vidc-btn vidc-btn--primary ml-2"
              data-size="sm"
            >
              {trailingButtonText}
            </VIDCNativeButton>
          )}

          {/* Payment Input Card Logo Variant */}
          {typeVariant === 'payment-input' && (
            <span className="shrink-0 text-xs font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-300 dark:border-slate-700">
              CARD
            </span>
          )}
        </div>

        {/* Hint Text */}
        {hint && !errorMessage && (
          <p id={hintId} className="text-xs text-[var(--vidc-text-tertiary)]">
            {hint}
          </p>
        )}

        {/* Error Message */}
        {errorMessage && (
          <p id={errorId} className="text-xs font-medium text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorMessage}</span>
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
