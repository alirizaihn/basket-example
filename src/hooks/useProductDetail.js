import { useState } from 'react'
import { fetchProductById } from '../store/productSlice';
import { useDispatch } from 'react-redux';

const useProductDetail = () => {
    const [productDetail, setProductDetail] = useState([]);
    const dispatch = useDispatch();
    const getElementById = (id) => {
        dispatch(fetchProductById(id)).then((item) => {
          setProductDetail(item?.payload);
          return item?.payload;
        });
      };
  return (
   {
    productDetail,
    getElementById
   }
  )
}

export default useProductDetail