import { useState, type ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Classes for the shimmering skeleton wrapper (sizing/layout). */
  wrapperClassName?: string;
}

/**
 * Image with a shimmering skeleton placeholder that fades the picture in
 * once it has loaded. The wrapper carries the shimmer so the layout keeps
 * its size before the bytes arrive.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      className={`block overflow-hidden ${loaded ? '' : 'img-skeleton'} ${wrapperClassName}`}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`block transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...rest}
      />
    </span>
  );
}
