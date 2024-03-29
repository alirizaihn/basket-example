import { Button } from 'antd'
import React from 'react'
import PropTypes from 'prop-types';
const TotalPriceCard = (props) => {
const {totalPrice, checkoutBasket} = props;
  return (
    <div
    className="shadow-md rounded-md p-2 flex flex-col justify-start flex flex-col text-left"
  >
    <span className="text-sm tex-left text-gray-400">Check out</span>
      <div className='flex items-center'>
      <span className='text-sm text-center'>Total Prise:</span>
      <span className='text-lg text-blue-500  font-bold mx-1 '>{totalPrice}₺</span></div>
    
     <Button  className="bg-blue-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base" size="large" onClick={() => {checkoutBasket()}}>
      Check Out
    </Button>
  </div>
  )
}

TotalPriceCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  checkoutBasket: PropTypes.func.isRequired,
};
export default TotalPriceCard