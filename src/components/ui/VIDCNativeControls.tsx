'use client';

import React, { forwardRef } from 'react';

/**
 * Compatibility primitives for previously bespoke UI. These are real DS controls,
 * but deliberately do not override a product page's established geometry or brand
 * treatment. The common accessibility/motion contract is in vidc-controls.css.
 * Prefer VIDCButton/InputField/TextareaField for *new* interfaces.
 */
export const VIDCNativeButton = forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(
  function VIDCNativeButton({ className = '', ...props }, ref) {
    // Preserve native button type, including implicit submit behaviour in forms.
    return <button {...props} ref={ref} data-vidc-control="button" className={`vidc-native-control ${className}`.trim()} />;
  },
);

export const VIDCNativeInput = forwardRef<HTMLInputElement, React.ComponentPropsWithRef<'input'>>(
  function VIDCNativeInput({ className = '', ...props }, ref) {
    return <input {...props} ref={ref} data-vidc-control="input" className={`vidc-native-control ${className}`.trim()} />;
  },
);

export const VIDCNativeTextarea = forwardRef<HTMLTextAreaElement, React.ComponentPropsWithRef<'textarea'>>(
  function VIDCNativeTextarea({ className = '', ...props }, ref) {
    return <textarea {...props} ref={ref} data-vidc-control="textarea" className={`vidc-native-control ${className}`.trim()} />;
  },
);

export const VIDCNativeSelect = forwardRef<HTMLSelectElement, React.ComponentPropsWithRef<'select'>>(
  function VIDCNativeSelect({ className = '', ...props }, ref) {
    return <select {...props} ref={ref} data-vidc-control="select" className={`vidc-native-control ${className}`.trim()} />;
  },
);

VIDCNativeButton.displayName = 'VIDCNativeButton';
VIDCNativeInput.displayName = 'VIDCNativeInput';
VIDCNativeTextarea.displayName = 'VIDCNativeTextarea';
VIDCNativeSelect.displayName = 'VIDCNativeSelect';
