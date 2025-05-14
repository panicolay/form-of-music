import { Label } from 'radix-ui';
import React from 'react';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

interface FieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  instruction?: string;
  type?: InputType;
}

export default function Field({
  name,
  label = name,
  error,
  instruction,
  type = 'text',
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
        `}
    >
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
      <input
        aria-describedby={
          error
            ? `${name}-error`
            : instruction
              ? `${name}-instruction`
              : undefined
        }
        aria-invalid={!!error}
        className={`
                    text-base text-zinc-200
                    outline-none
                    focus:text-zinc-50
                    transition-colors duration-120 ease-in-out d
                    ${props.className || ''}
                `}
        id={name}
        name={name}
        type={type}
        {...props}
      />
      {error && (
        <span className="text-rose-500 text-sm" id={`${name}-error`}>
          {error}
        </span>
      )}
      {instruction && !error && (
        <span
          className="
              text-zinc-500 text-sm
              group-focus-within:text-zinc-400
              transition-colors duration-120 ease-in-out
            "
          id={`${name}-instruction`}
        >
          {instruction}
        </span>
      )}
    </Label.Root>
  );
}
