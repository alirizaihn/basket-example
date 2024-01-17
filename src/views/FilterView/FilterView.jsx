import React from "react";
import FilterCard from "../../components/Filter/FilterCard/FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilter } from "../../store/filterSlice";

const FilterView = () => {
  const { items: filters, selectedFilter } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const onChange = (key, value) => {
    dispatch(setSelectedFilter({ key, value }));
  };

  return (
    <div className="w-full lg:w-1/4 flex flex-col bg-white rounded-lg p-4  mb-8 lg:mb-0">
      {filters?.map((filter, key) => (
        <FilterCard
          key={key}
          onChange={onChange}
          {...filter}
          value={selectedFilter[filter.name]}
        ></FilterCard>
      ))}
    </div>
  );
};

export default FilterView;
