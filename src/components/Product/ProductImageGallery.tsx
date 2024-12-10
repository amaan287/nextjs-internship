import React from "react";

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
}) => (
  <div className="bg-[#F8F6F4]  w-[761px] h-[652px]     flex  flex-row-reverse items-center justify-center z-0">
    <div className="flex flex-col bg-[#F8F6F4] bg-[url('/Location_Cheese_Big_Picture_1.png')] bg-cover bg-blend-darken gap-1 w-[552px] h-[552px] p-[11px]"></div>
    <div className="flex flex-col gap-[5px] z-10 bg-blend-darken  ">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Product Image ${index + 1}`}
          className="w-[40px] h-[40px] object-cover bg-blend-darken cursor-pointer rounded"
        />
      ))}
    </div>
  </div>
);

export default ProductImageGallery;
