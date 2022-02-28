import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmountClp = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "CLP",
  })
    .format(cartCtx.totalAmount)
    .replace("CLP", "");

  const totalAmount = `$${totalAmountClp}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "CLP",
  })
    .format(item.price)
    .replace("CLP", "")}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Cerrar
        </button>
        {hasItems && <button className={classes.button}>Ordenar</button>}
      </div>
    </Modal>
  );
};

export default Cart;
