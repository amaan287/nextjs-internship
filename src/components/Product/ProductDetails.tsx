import React from "react";
import Scale from "../../../public/scale";
import Width from "../../../public/width";

interface ProductDetailsProps {
  title: string;
  price: number;
  description: string;
  specs: {
    label: { Length: string; Voltage: string; width: string; Power: string };
    value: string;
  }[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  price,
  description,
  specs,
}) => (
  <div className="mt-6 space-y-4">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <p className="text-lg font-bold ">
      {price}€ <span className="text-sm text-gray-300">/ piece</span>
    </p>
    <div className="border-t border-b">
      {specs.map((spec, index) => (
        <div key={index} className="flex m-4 gap-2">
          <p className="flex ">
            <div className="flex">
              <Scale />
              {spec.label.Length}
            </div>
          </p>{" "}
          <p className="flex ">
            <div className="flex">
              <Width />
              {spec.label.width}
            </div>
          </p>{" "}
        </div>
      ))}
    </div>
    <p className="text-gray-700 text-xs">{description}</p>
    <p className="text-gray-700 text-xs">{description}</p>
    <p className="text-gray-700 text-xs">{description}</p>
  </div>
);

export default ProductDetails;
