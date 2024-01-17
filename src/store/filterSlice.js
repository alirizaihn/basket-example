import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    items: [],
    selectedFilter: {
      name: "",
      brand: [],
      model: [],
      sortBy:'ascDate'
    },
  },
  reducers: {
    resetFilter: (state) => {
      state.selectedFilter = null;
    },
    setSelectedFilter: (state, { payload }) => {
      state.selectedFilter = {
        ...state.selectedFilter,
        [payload.key]: payload.value,
      };
    },
    setFilter: (state, { payload }) => {
      const uniqueBrands = [
        ...new Set(payload.map((product) => product.brand)),
      ];
      const uniqueModels = [
        ...new Set(payload.map((product) => product.model)),
      ];
      const sortOptions = [
        {
          value: "ascDate",
          label: "Old to new",
        },
        {
          value: "descDate",
          label: "New to old",
        },
        {
          value: "descPrice",
          label: "Price hight to low",
        },
        {
          value: "ascPrice",
          label: "Price low to High",
        },
      ];
      const brandsOptions = uniqueBrands.map((brand) => ({
        label: brand,
        value: brand,
      }));
      const modelsOptions = uniqueModels.map((brand) => ({
        label: brand,
        value: brand,
      }));

      const filters = [
        {
          title: "Sort By",
          name: "sortBy",
          type: "radio",
          options: sortOptions,
        },
        {
          title: "Brands",
          name: "brand",
          type: "checkbox",
          options: brandsOptions,
          hasSearch: true,
        },
        {
          title: "Model",
          name: "model",
          type: "checkbox",
          options: modelsOptions,
          hasSearch: true,
        },
      ];
      state.items = filters;
    },
  },
});
export const { resetFilter, setFilter, setSelectedFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
