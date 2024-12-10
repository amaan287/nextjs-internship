import React from "react";

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
}) => (
  <div className="flex flex-col gap-[5px] z-10 bg-blend-darken  ">
    <img
      src={images[0]}
      alt={`Product Image `}
      className="w-[40px] h-[40px] object-cover bg-blend-darken cursor-pointer rounded opacity-100"
    />

    {images.slice(1).map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Product Image ${index + 1}`}
        className="w-[40px] h-[40px] object-cover bg-blend-darken cursor-pointer rounded opacity-50"
      />
    ))}
  </div>
);

export default ProductImageGallery;
