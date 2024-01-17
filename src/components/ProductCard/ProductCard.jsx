import React from 'react'
import { Link} from 'react-router-dom';
import { Button } from 'antd';

const ProductCard = (props) => {
const {data, addToCard} = props;
const {image,price, name, id} = data;

    return (
      <div className="bg-white rounded-lg shadow-md p-2 md:p-4" key={`key-${id}`}>
      <Link to={`/product/${id}`}>
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-lg mb-2 md:h-40"
      />
      <p className="text-md text-left text-blue-500 md:text-lg font-bold mb-1 md:mb-2">{price}₺</p>
      <p className="text-gray-700 text-left mb-2 md:mb-4">{name}</p>
      </Link>
      <Button onClick={() => addToCard(data)} className="bg-blue-500 text-white py-1 px-2 md:px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base">
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard