
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFilter } from '../store/filterSlice';

const useHeader = () => {
    const dispatch = useDispatch();
    const {totalPrice} = useSelector(state => state.basket)
     const onChange = ((key, value ) => {
        dispatch(setSelectedFilter({key,value}))
        console.log("checkedText",key, value);
      })
     
  return (
   {onChange, totalPrice}
  )
}

export default useHeader