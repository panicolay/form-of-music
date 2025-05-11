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
        <Label.Root className="
            group
            flex flex-col p-4 gap-1
            cursor-text
            focus-within:bg-zinc-800
            transition-colors duration-200 ease-in-out
        ">
            <span className="
                font-poppins
                text-sm text-zinc-400 uppercase
                group-focus-within:text-zinc-200
                transition-colors duration-200 ease-in-out
            ">
                {label}
            </span>
            <input
                id={name}
                name={name}
                type={type}
                className={`
                    text-base text-zinc-200
                    outline-none
                    focus:text-zinc-50
                    transition-colors duration-200 ease-in-out
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