import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex w-full rounded-[10px] border border-border bg-[var(--surface)] px-[15px] py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-accent focus:ring-[3px] focus:ring-accent/15 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };