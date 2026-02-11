import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-brand text-white hover:bg-brand/90 active:scale-95 shadow-lg shadow-brand/20 border border-brand/10',
            secondary: 'bg-accent text-white hover:bg-accent/90 active:scale-95 shadow-lg shadow-accent/20',
            outline: 'border-2 border-brand/20 text-brand hover:bg-brand/5 active:scale-95',
            ghost: 'bg-transparent text-muted-foreground hover:bg-brand/5 hover:text-brand transition-colors',
        };

        const sizes = {
            sm: 'px-4 py-1.5 text-sm',
            md: 'px-6 py-2.5 text-base font-medium',
            lg: 'px-8 py-3.5 text-lg font-semibold',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
