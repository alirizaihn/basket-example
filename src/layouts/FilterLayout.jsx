import { Outlet } from "react-router-dom";
import FilterView from "../views/FilterView/FilterView";

const FilterLayout = () => {

  return (
    <>
      <FilterView />
      <Outlet />
    </>
  );
};

export default FilterLayout;
