import Image from "next/image"

interface IconLogoProps {
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export default function IconLogo({ className = "", width = 120, height = 120, priority = false }: IconLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/icon-logo.png"
        alt="Go Big Scale Up Icon"
        width={width}
        height={height}
        className="object-contain"
        priority={priority}
      />
    </div>
  )
}
