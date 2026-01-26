import { useState } from 'react';

export function ImageWithFallback({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E');
  };

  return <img src={imageSrc} alt={alt} onError={handleError} {...props} />;
}
