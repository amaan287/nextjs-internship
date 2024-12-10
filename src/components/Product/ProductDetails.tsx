import React from "react";

interface ProductDetailsProps {
  title: string;
  price: number;
  description: string;
  specs: { label: string; value: string }[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  price,
  description,
  specs,
}) => (
  <div className="mt-6 space-y-4">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <p className="text-lg font-bold text-green-600">{price}€ / piece</p>
    <ul className="list-disc pl-5 space-y-1">
      {specs.map((spec, index) => (
        <li key={index}>
          <strong>{spec.label}:</strong> {spec.value}
        </li>
      ))}
    </ul>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default ProductDetails;
