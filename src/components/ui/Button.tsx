'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  onClick?: () => void
  href?: string
  disabled?: boolean
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-brand-red text-off-white',
    'shadow-[0_4px_0_#5a0000,0_6px_12px_rgba(0,0,0,0.3)]',
    'hover:shadow-[0_5px_0_#5a0000,0_8px_16px_rgba(0,0,0,0.35)] hover:-translate-y-[1px]',
    'active:shadow-[0_1px_0_#5a0000,0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[3px]',
  ].join(' '),
  secondary: [
    'bg-wood-dark text-off-white',
    'shadow-[0_4px_0_#3d3530,0_6px_12px_rgba(0,0,0,0.3)]',
    'hover:shadow-[0_5px_0_#3d3530,0_8px_16px_rgba(0,0,0,0.35)] hover:-translate-y-[1px]',
    'active:shadow-[0_1px_0_#3d3530,0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[3px]',
  ].join(' '),
  outline: [
    'bg-transparent text-off-white border-2 border-off-white/30',
    'shadow-[0_4px_0_rgba(90,70,60,0.5),0_6px_12px_rgba(0,0,0,0.2)]',
    'hover:bg-off-white/10 hover:border-off-white/50 hover:shadow-[0_5px_0_rgba(90,70,60,0.5),0_8px_16px_rgba(0,0,0,0.25)] hover:-translate-y-[1px]',
    'active:shadow-[0_1px_0_rgba(90,70,60,0.5),0_2px_4px_rgba(0,0,0,0.15)] active:translate-y-[3px]',
  ].join(' '),
  ghost: [
    'bg-transparent text-off-white',
    'hover:text-wood-gold hover:underline underline-offset-4',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const disabledStyles = 'opacity-50 cursor-not-allowed shadow-none transform-none hover:transform-none hover:shadow-none'

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  href,
  disabled = false,
  children,
  className,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase',
    'transition-all duration-[120ms] ease-out',
    'rounded select-none',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    disabled && disabledStyles,
    className
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
