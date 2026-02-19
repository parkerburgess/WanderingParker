'use client'

interface ProjectImageProps {
  src: string
  alt: string
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="w-full h-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement
          img.style.display = 'none'
          ;(img.nextElementSibling as HTMLElement).style.display = 'flex'
        }}
      />
      <div className="w-full h-full hidden items-center justify-center">
        <span className="text-text-muted text-sm">No image</span>
      </div>
    </div>
  )
}
