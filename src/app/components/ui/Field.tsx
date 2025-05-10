import React from 'react';
import { Label } from 'radix-ui';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
    type?: InputType;
}

export function Field({ 
    name, 
    label = name,
    error,
    type = 'text',
    ...props 
}: FieldProps) {
    return (
        <Label.Root className="flex flex-col p-4 gap-1">
            {label}
            <input
                id={name}
                name={name}
                type={type}
                className={`
                    outline-none
                    ${error ? 'border-red-500' : 'border-zinc-300'}
                    ${props.className || ''}
                `}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
                {...props}
            />
            {error && (
                <span 
                    id={`${name}-error`}
                    className="text-red-500"
                >
                    {error}
                </span>
            )}
        </Label.Root>
    )
}