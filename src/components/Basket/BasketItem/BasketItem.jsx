import { Button} from "antd";
import React from "react";

const BasketItem = (props) => {
  const { name, price, quantity, increase, decrease } = props;
  return (
    <div className="justify-between flex">
      <div className="flex flex-col text-left">
        <span className="text-sm">{name}</span>
        <span className="text-blue-500 text-xs">{price}₺</span>
      </div>
      <div className="flex">
        <Button
          className="bg-blue-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
          size="small"
          onClick={() => decrease()}
        >
          -
        </Button>
        <span
        className="text-sm mx-1"
        >
          {quantity}
        </span>
        <Button
          className="bg-blue-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
          size="small"
          onClick={() => increase()}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default BasketItem;
