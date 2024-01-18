import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import PropTypes from "prop-types";
const BasketCard = (props) => {
  const { basketItems, increase, decrease } = props;

  return (
    <div className="shadow-md rounded-md mb-4 p-2 flex flex-col text-left min-w-4">
      <span className="text-sm text-gray-400">Cart</span>
      {basketItems.length ? (
        basketItems?.map((item, key) => (
          <BasketItem
            key={key}
            name={item?.name}
            price={item?.price}
            quantity={item.quantity}
            increase={() => increase(item)}
            decrease={() => decrease(item)}
          />
        ))
      ) : (
        <span className="text-xs text-gray-400 text-center">Empty</span>
      )}
    </div>
  );
};
BasketCard.propTypes = {
  basketItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      increase: PropTypes.func.isRequired,
      decrease: PropTypes.func.isRequired,
    })
  ).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

export default BasketCard;
