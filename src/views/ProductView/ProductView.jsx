import { Button, Image } from "antd";

import React from "react";
import { addToBasket } from "../../store/basketSlice";
import { useDispatch } from "react-redux";

const ProductView = (props) => {
  const { data } = props;
  const { image, name, price, description } = data;
  const dispatch = useDispatch();
  return (
    <div
      className="w-full lg:w-4/5 shadow-md rounded-md p-4"
      style={{ margin: 5, minHeight: 280 }}
    >
      <div className="flex flex-wrap">
        <div className="flex flex-initial w-6/12 min-w-72 justify-center">
          <Image preview={false} src={image}></Image>
        </div>
        <div className=" flex flex-col flex-initial w-6/12 min-w-72 text-left ps-5">
          <h4> {name}</h4>
          <h5 style={{ color: "blue" }}>{price}₺</h5>
          <Button
            className="bg-blue-500 text-white py-1 px-2 md:px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base"
            onClick={() => dispatch(addToBasket(data))}
          >
            Add to Card
          </Button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
