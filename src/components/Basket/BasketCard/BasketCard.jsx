import React from "react";
import BasketItem from "../BasketItem/BasketItem";

const BasketCard = (props) => {
  const { basketItems,increase,decrease } = props;

  return (
    <div
      className="shadow-md rounded-md mb-4 p-2 flex flex-col text-left min-w-4"
    >
       <span className="text-sm text-gray-400">Cart</span>
      {basketItems.length ? basketItems?.map((item, key) => (
        <BasketItem
          key={key}
          name={item?.name}
          price={item?.price}
          quantity={item.quantity}
          increase={() => increase(item)}
          decrease={() => decrease(item)}
        />
      )): <span className="text-xs text-gray-400 text-center">Empty</span>}
    </div>
    
  );
};

export default BasketCard;
