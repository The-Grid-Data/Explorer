import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

const spinnerVariants = cva('inline-block animate-spin text-current', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

export interface SpinnerProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <Loader
        ref={ref}
        className={cn('animate-pulse', spinnerVariants({ size }), className)}
        {...props}
      />
    );
  }
);

Spinner.displayName = 'Spinner';
