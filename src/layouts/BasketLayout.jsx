import React from "react";
import { Outlet } from "react-router-dom";
import BasketView from "../views/BasketView/BasketView";

const BasketLayout = () => {

  return (
    <>
      <Outlet />
      <BasketView />
    </>
  );
};

export default BasketLayout;
