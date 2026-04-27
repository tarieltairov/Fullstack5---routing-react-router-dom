import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product";
import "./ProductCard.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

type ProductCardProps = Product;

export function ProductCard({ imageUrl, price, title, id }: ProductCardProps) {
  const { addToCart } = useContext(CartContext)!;

  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img
        onClick={() => navigate(`/product/${id}`, { state: { from: "/" } })}
        className="product-card_img"
        src={imageUrl}
        alt="product-image"
      />
      <h3 className="product-card_title">{title}</h3>
      <p className="product-card_price">{price}</p>
      <button onClick={() => addToCart({ imageUrl, price, title, id })}>
        В корзину
      </button>
    </div>
  );
}
