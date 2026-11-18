import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.7 14.7 0 0 0 5.7 5c2.1.9 2.9 1 4 .8a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.6c-.1-.1-.3-.2-.6-.4z" />
    </svg>
  )
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path d="M8 16h7l3-5h12l3 5h7v22H8z" />
      <circle cx="24" cy="26" r="7" />
    </svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M20 16l12 8-12 8z" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path d="M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11z" />
      <path d="M17 24l5 5 9-10" />
    </svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path d="M24 44s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z" />
      <circle cx="24" cy="20" r="5" />
    </svg>
  )
}
