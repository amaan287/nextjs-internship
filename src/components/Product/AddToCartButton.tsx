import React from "react";

interface AddToCartButtonProps {
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => (
  <button
    onClick={onAddToCart}
    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
  >
    Ajouter au Panier
  </button>
);

export default AddToCartButton;
