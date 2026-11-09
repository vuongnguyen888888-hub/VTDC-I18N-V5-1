'use client';

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MegaInputBase, MegaInputSize } from './_MegaInputBase';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export interface OtpInputProps {
  length?: 4 | 6;
  size?: MegaInputSize;
  value?: string;
  defaultValue?: string;
  onChange?: (code: string) => void;
  onComplete?: (code: string) => void;
  disabled?: boolean;
  isDestructive?: boolean;
  errorMessage?: string;
  label?: string;
  hint?: string;
  className?: string;
  id?: string;
}

export interface OtpInputRef {
  focus: () => void;
  clear: () => void;
}

/**
 * Verification code input field (Figma 1106:66757 - 6 variants)
 * Supports 4 or 6 digits across 3 sizes: SM (64px), MD (80px), LG (96px).
 * Built with _MegaInputBase cells. Features auto focus shift, backspace navigation, paste handling.
 */
export const OtpInput = forwardRef<OtpInputRef, OtpInputProps>(
  (
    {
      length = 6,
      size = 'md',
      value: controlledValue,
      defaultValue = '',
      onChange,
      onComplete,
      disabled = false,
      isDestructive = false,
      errorMessage,
      label,
      hint,
      className,
      id = 'otp-input',
    },
    ref
  ) => {
    const [digits, setDigits] = useState<string[]>(() => {
      const initial = controlledValue ?? defaultValue;
      return Array.from({ length }, (_, i) => initial[i] || '');
    });

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
      if (controlledValue !== undefined) {
        setDigits(Array.from({ length }, (_, i) => controlledValue[i] || ''));
      }
    }, [controlledValue, length]);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRefs.current[0]?.focus();
      },
      clear: () => {
        const empty = Array(length).fill('');
        setDigits(empty);
        onChange?.('');
        inputRefs.current[0]?.focus();
      },
    }));

    const updateDigit = (index: number, val: string) => {
      const newDigits = [...digits];
      newDigits[index] = val;
      setDigits(newDigits);
      const code = newDigits.join('');
      onChange?.(code);
      if (code.length === length && !newDigits.includes('')) {
        onComplete?.(code);
      }
    };

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, '').slice(-1);
      updateDigit(index, val);
      if (val && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        if (!digits[index] && index > 0) {
          updateDigit(index - 1, '');
          inputRefs.current[index - 1]?.focus();
        } else {
          updateDigit(index, '');
        }
      } else if (e.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
      if (!pasted) return;

      const newDigits = Array.from({ length }, (_, i) => pasted[i] || '');
      setDigits(newDigits);
      const code = newDigits.join('');
      onChange?.(code);

      const nextFocus = Math.min(pasted.length, length - 1);
      inputRefs.current[nextFocus]?.focus();

      if (code.length === length) {
        onComplete?.(code);
      }
    };

    return (
      <div className={cn('space-y-2', className)}>
        {label && (
          <label htmlFor={`${id}-0`} className="block text-xs font-bold text-[var(--vidc-text-primary)] font-body">
            {label}
          </label>
        )}

        <div
          role="group"
          aria-label={label || 'Mã xác thực OTP'}
          className={cn('flex items-center gap-2 sm:gap-3 flex-wrap', disabled && 'opacity-60')}
        >
          {Array.from({ length }).map((_, index) => (
            <MegaInputBase
              key={index}
              id={`${id}-${index}`}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              size={size}
              value={digits[index]}
              disabled={disabled}
              isDestructive={isDestructive || Boolean(errorMessage)}
              state={focusedIndex === index ? 'focused' : digits[index] ? 'filled' : 'default'}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              autoComplete={index === 0 ? 'one-time-code' : 'off'}
              aria-label={`Mã số ${index + 1}`}
            />
          ))}
        </div>

        {hint && !errorMessage && (
          <p className="text-xs text-[var(--vidc-text-tertiary)] font-body">{hint}</p>
        )}

        {errorMessage && (
          <p className="text-xs font-medium text-red-600 dark:text-red-400 flex items-center gap-1 font-body" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorMessage}</span>
          </p>
        )}
      </div>
    );
  }
);

OtpInput.displayName = 'OtpInput';
