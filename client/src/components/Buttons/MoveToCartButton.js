import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { handleMoveItemToCart } from '../../utils/serverRequest';

export const MoveToCartButton = ({ product }) => {
   const { state, dispatch } = useData();

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleMoveItemToCart({ state, dispatch, product, notify })
            }
            className='btn btn-primary btn-cart'
            type='button'>
            Move to Cart
         </button>
      </>
   );
};
