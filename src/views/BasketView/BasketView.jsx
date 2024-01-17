import React from "react";
import BasketCard from "../../components/Basket/BasketCard/BasketCard";
import TotalPriceCard from "../../components/Basket/TotalPriceCard/TotalPriceCard";
import { useDispatch, useSelector } from "react-redux";
import {increaseQuantity, decreaseQuantity, clearBasket } from "../../store/basketSlice";

const BasketView = () => {
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector((state) => state.basket)

  return (
    <div className="w-full lg:w-1/4 flex flex-col bg-white rounded-lg p-4" >
    <BasketCard basketItems={items} increase={(item) => dispatch(increaseQuantity(item))}
    decrease={(item) => dispatch(decreaseQuantity(item))}/>
    <TotalPriceCard totalPrice={totalPrice} checkoutBasket={() => dispatch(clearBasket())}/></div>
  );
};

export default BasketView;
