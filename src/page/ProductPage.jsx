import React, { useEffect} from 'react'
import ProductView from '../views/ProductView/ProductView'
import { useParams } from 'react-router-dom'

import useProductDetail from '../hooks/useProductDetail';

const ProductPage = () => {
    const {productDetail, getElementById} = useProductDetail();
    let { id } = useParams();
    useEffect(() => {
    getElementById(id)
     
    }, [])
    
  return (
    <ProductView data={productDetail}/>
  )
}

export default ProductPage