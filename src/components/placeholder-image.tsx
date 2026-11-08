import Image from 'next/image';

export function PlaceholderImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 ring-1 ring-amber-100 ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
    </div>
  );
}
