import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

export function Cart() {
  const { cart, addToCart, removeItemFromCart, increaseItem, decreaseItem } = useContext(CartContext)!;

  return (
    <div className="cart">
      <div className="cart__list">
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div className="cart__item">
                <img src={item.imageUrl} alt="" />
                <div className="cart__item_right">
                  <h2>{item.title}</h2>
                  <h3>{item.price} сом</h3>
                  <div className="cart__item_controls">
                    <div>
                      <button onClick={() => decreaseItem(item.id)} className="cart__item_decrease">-</button>
                      <button onClick={() => increaseItem(item.id)} className="cart__item_increase">+</button>
                    </div>
                    <button onClick={() => removeItemFromCart(item.id)} className="cart__item_remove">Удалить</button>
                  </div>
                  <h3>{item.quantity}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Нет товаров в корзине</h2>
        )}
      </div>
    </div>
  );
}
