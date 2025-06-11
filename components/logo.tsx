import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  width?: number
  height?: number
  showText?: boolean
}

export default function Logo({ className = "", width = 180, height = 80, showText = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Go Big Scale Up"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      {showText && <span className="sr-only">Go Big Scale Up</span>}
    </Link>
  )
}
