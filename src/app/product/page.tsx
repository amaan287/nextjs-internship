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
      { label: "Dimensions", value: "20cm x 50cm" },
      { label: "Voltage", value: "220V" },
      { label: "Power", value: "900W" },
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImageGallery images={product.images} />
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
