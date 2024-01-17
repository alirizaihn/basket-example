import React, { useEffect } from "react";
import { Flex, Pagination } from "antd";
import { Content } from "antd/es/layout/layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProduct from "../../hooks/useProduct";
import { addToBasket } from "../../store/basketSlice";
import { useDispatch } from "react-redux";

const ListView = () => {
  const { products, page, onChangePage, getProducts, addToCard } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-start justify-between mb-8 lg:mb-0">
    <Content>
      <Flex wrap="wrap" gap="large" justify="center">
        {products.map((data, i) => (
          <ProductCard data={data} addToCard={addToCard}/>
        ))}
      </Flex>
      <Pagination
        className="mt-6"
        current={page.current}
        onChange={onChangePage}
        pageSize={page.pageSize}
        total={page.total}
        hideOnSinglePage
        pageSizeOptions={[]}
      />
    </Content>
    </div>
  );
};

export default ListView;
