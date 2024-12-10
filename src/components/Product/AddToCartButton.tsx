import React from "react";

interface AddToCartButtonProps {
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => (
  <button
    onClick={onAddToCart}
    className=" w-full mt-4 px-6 py-2 bg-[#5CD2DD] text-white rounded "
  >
    Ajouter au Panier
  </button>
);

export default AddToCartButton;
