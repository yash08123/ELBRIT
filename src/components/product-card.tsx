import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

export function ProductCard({
  title,
  description,
  image,
  color,
}: ProductCardProps) {
  return (
    <div className={`${color} rounded-3xl p-8 relative overflow-hidden`}>
      <div className="space-y-2 mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <Link
        href="#"
        className="inline-block text-sm font-medium text-[#1B4B59] hover:underline"
      >
        SEE MORE
      </Link>
      <div className="absolute right-0 bottom-0 w-32 h-32">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
    </div>
  );
}
