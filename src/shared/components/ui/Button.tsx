import type { AnchorHTMLAttributes } from 'react'
import { buttonClass, type ButtonStyleProps } from './buttonClass'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonStyleProps & { href: string }

export function Button({ variant, size, block, className, children, ...props }: ButtonProps) {
  return (
    <a className={buttonClass({ variant, size, block, className })} {...props}>
      {children}
    </a>
  )
}
