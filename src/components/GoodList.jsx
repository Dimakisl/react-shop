import GoodsItem from "./GoodsItem";

export default function GoodList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Пусто</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />;
      })}
    </div>
  );
}
