import { Label } from 'radix-ui';
import React from 'react';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

interface FieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showLabel?: boolean;
  error?: string;
  instruction?: string;
  type?: InputType;
}

export default function Field({
  name,
  label = name,
  showLabel = true,
  error,
  instruction,
  type = 'text',
  className,
  ...props
}: FieldProps) {
  return (
    <Label.Root
      className={`
            group
            flex flex-col p-4 gap-1
            cursor-text
            focus-within:bg-zinc-800
            transition-colors duration-120 ease-in-out
            ${className || ''}
        `}
    >
      {showLabel && (
        <span
          className="
                font-poppins
                text-sm text-zinc-400 uppercase
                group-focus-within:text-zinc-200
                transition-colors duration-120 ease-in-out
            "
        >
          {label}
        </span>
      )}
      <input
        aria-describedby={
          error
            ? `${name}-error`
            : instruction
              ? `${name}-instruction`
              : undefined
        }
        aria-invalid={!!error}
        className="
                    text-base text-zinc-200
                    outline-none
                    focus:text-zinc-50
                    transition-colors duration-120 ease-in-out
                "
        id={name}
        name={name}
        type={type}
        {...props}
      />
      {error && (
        <div
          className="text-rose-500 text-sm"
          dangerouslySetInnerHTML={{ __html: error }}
          id={`${name}-error`}
        />
      )}
      {instruction && !error && (
        <div
          className="
        text-zinc-500 text-sm
        group-focus-within:text-zinc-400
        transition-colors duration-120 ease-in-out
        "
          dangerouslySetInnerHTML={{ __html: instruction }}
          id={`${name}-instruction`}
        />
      )}
    </Label.Root>
  );
}
