import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_8px_24px_-8px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(59,130,246,0.75)]',
        outline:
          'border border-border bg-[var(--surface)] text-foreground hover:border-primary hover:text-primary',
        ghost: 'text-muted-foreground hover:bg-[var(--surface)] hover:text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
      },
      size: {
        default: 'h-11 px-[22px] py-3',
        sm: 'h-9 rounded-lg px-4 text-[13px]',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'h-9 w-9 rounded-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };