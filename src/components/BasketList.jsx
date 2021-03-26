import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const {
    order,
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPice} руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Купить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
