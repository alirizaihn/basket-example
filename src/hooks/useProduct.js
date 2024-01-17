import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, fetchProducts } from "../store/productSlice";
import { setFilter } from "../store/filterSlice";
import { addToBasket } from "../store/basketSlice";
const useProduct = () => {
  const { items: products } = useSelector((state) => state.product);
  const [productDetail, setProductDetail] = useState([]);
  const [page, setPage] = useState({ current: 1, total: 0, pageSize: 12 });
  const { selectedFilter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getProducts = () => {
    dispatch(fetchProducts()).then((item) => {
      dispatch(setFilter(item.payload));
    });
  };
  const addToCard = (data) => {
      dispatch(addToBasket(data))
  }
  const sortByFun = (arr, sortByKey) => {
    if (sortByKey === "ascDate") {
        console.log("Bakas",[...arr].sort((a, b) => a.createdAt.localeCompare(b.createdAt)));
       return [...arr].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }
    if (sortByKey === "descDate") {
      return [...arr].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
    if (sortByKey === "descPrice") {
      return [...arr].sort((a, b) => b.price - a.price);
    }
    if (sortByKey === "ascPrice") {
      return [...arr].sort((a, b) => a.price - b.price);
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = products || [];
    if (
      selectedFilter.name ||
      selectedFilter.brand.length ||
      selectedFilter.model.length
    ) {
      filtered = products.filter((product) => {
        const namePass = selectedFilter.name
          ? product.name
              .toLowerCase()
              .includes(selectedFilter.name.toLowerCase())
          : true;
        const brandPass =
          selectedFilter.brand.length === 0 ||
          selectedFilter.brand.includes(product.brand);
        const modelPass =
          selectedFilter.model.length === 0 ||
          selectedFilter.model.includes(product.model);
        return namePass && brandPass && modelPass;
      });
    }
    setPage({ current: 1, total: filtered.length, pageSize: 12 });

    return sortByFun(filtered, selectedFilter.sortBy);
  }, [products, selectedFilter]);

  const filteredProductsMemo = useMemo(() => {
    const startIndex = (page.current - 1) * page.pageSize;
    const endIndex = startIndex + page.pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    return paginatedProducts;
  }, [filteredProducts, page.current]);

  const getElementById = (id) => {
    dispatch(fetchProductById(id)).then((item) => {
      setProductDetail(item?.payload);
      return item?.payload;
    });
  };
  const onChangePage = (currentPage) => {
    setPage((p) => ({ ...p, current: currentPage }));
  };

  return {
    products: filteredProductsMemo,
    productDetail,
    page,
    onChangePage,
    getElementById,
    getProducts,
    addToCard,
  };
};

export default useProduct;
