import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "../store/CartItem.jsx";

export default function Cart() {
  const CartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);

  const cartTotal = CartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handleShowCart() {
    UserProgressCtx.showCart();
  }

  function handleHideCart() {
    UserProgressCtx.hideCart();
  }

  function handleGoToCart() {
    UserProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={UserProgressCtx.progress === "cart"}
      onClose={UserProgressCtx.progress === "cart" ? handleHideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {CartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => CartCtx.addItem(item)}
            onDecrease={() => CartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleHideCart} textOnly>
          Close
        </Button>
        {CartCtx.items.length > 0 && (
          <Button onClick={handleGoToCart}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
