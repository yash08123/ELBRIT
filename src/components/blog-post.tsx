import Image from 'next/image'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  date: string
  image: string
}

export function BlogPost({ title, date, image }: BlogPostProps) {
  return (
    <Link href="#" className="group relative overflow-hidden rounded-2xl">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs px-2 py-1 rounded">
          {date}
        </div>
        <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold group-hover:underline">
          {title}
        </h3>
      </div>
    </Link>
  )
}

