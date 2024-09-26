import React from 'react';

const Image = ({ src, alt, className = "" }) => {
  const baseURL = process.env.PUBLIC_URL || ""; // Public URL base for static assets (like for Vercel)

  // Check if the `src` is an absolute or relative URL
  const isAbsoluteUrl = src.startsWith('http://') || src.startsWith('https://');

  // Use the base URL for relative paths, otherwise, use the absolute URL as-is
  const imageUrl = isAbsoluteUrl ? src : `${baseURL}${src}`;

  return (
    <img
      src={imageUrl} // Correctly concatenate the base URL with the image source
      alt={alt}
      className={className}
    />
  );
};

export default Image;
