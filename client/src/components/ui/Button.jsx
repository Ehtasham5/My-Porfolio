import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const variants = {
    primary: 'bg-foreground text-background hover:bg-accent hover:text-white active:scale-[0.98]',
    outline: 'border border-border bg-transparent hover:border-accent hover:text-accent active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-foreground/5 active:scale-[0.98]',
  };

  const sizes = {
    default: 'h-12 px-7 text-sm',
    sm: 'h-9 px-4 text-xs',
    lg: 'h-14 px-8 text-base',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
