"use client";
import React from "react";
import ProductImageGallery from "@/components/Product/ProductImageGallery";
import ProductDetails from "@/components/Product/ProductDetails";
import AddToCartButton from "@/components/Product/AddToCartButton";

const ProductPage: React.FC = () => {
  const product = {
    title: "Cheese – appareil à raclette 1/2 roue",
    price: 39.5,
    description:
      "Location appareil à raclette - Raclette traditionnelle 1/2 roue. Réglable en hauteur.",
    specs: [
      {
        label: {
          Length: "20",
          width: "50",
          Voltage: "220V",
          Power: "900W",
        },
        value: "Dimensions and power specifications",
      },
    ],
    images: [
      "/raclette1.png",
      "/raclette1.png",
      "/raclette1.png",
      "/raclette1.png",
    ],
  };

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className=" mx-auto p-6">
      <div className="flex gap-[25px]">
        <div className="flex gap-8 p-[10px] bg-[#F8F6F4] w-[761px] h-[652px] ">
          <ProductImageGallery images={product.images} />
          <div className="bg-[#F8F6F4] bg-[url('/Location_Cheese_Big_Picture_1.png')] bg-cover bg-blend-darken gap-1 w-[552px] h-[552px] p-[11px]"></div>
        </div>
        <div>
          <ProductDetails
            title={product.title}
            price={product.price}
            description={product.description}
            specs={product.specs}
          />
          <AddToCartButton onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
