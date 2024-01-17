import React from "react";
import BasketItem from "../BasketItem/BasketItem";

const BasketCard = (props) => {
  const { basketItems,increase,decrease } = props;

  return (
    <div
      className="shadow-md rounded-md mb-4 p-2"
    >
      {basketItems?.map((item, key) => (
        <BasketItem
          key={key}
          name={item?.name}
          price={item?.price}
          quantity={item.quantity}
          increase={() => increase(item)}
          decrease={() => decrease(item)}
        />
      ))}
    </div>
    
  );
};

export default BasketCard;
