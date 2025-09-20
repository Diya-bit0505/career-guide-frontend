import * as React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'default' | 'icon'
}

export const buttonVariants = ({ variant = 'default', size = 'default' }: Partial<ButtonProps> = {}) =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
    variant === 'outline' ? 'border border-border bg-transparent text-foreground hover:bg-secondary' : 'bg-primary text-primary-foreground hover:bg-primary-hover',
    size === 'icon' ? 'h-9 w-9' : 'h-9 px-4 py-2'
  )

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
)

Button.displayName = 'Button'
