import React from 'react';

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
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div 
            className="flex flex-col p-4 gap-1"
            onClick={handleClick}
            role="group"
        >
            <label 
                htmlFor={name}
                className=""
            >
                {label}
            </label>
            <input
                ref={inputRef}
                id={name}
                name={name}
                type={type}
                className={`
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
        </div>
    )
}