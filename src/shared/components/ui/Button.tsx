import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router'
import { buttonClass, type ButtonStyleProps } from '@/shared/utils/buttonClass'

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & ButtonStyleProps

type ButtonProps = AnchorProps & ({ href: string; to?: never } | { to: string; href?: never })

export function Button({ variant, size, block, className, children, to, href, ...props }: ButtonProps) {
  const classes = buttonClass({ variant, size, block, className })
  if (to !== undefined) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  )
}
