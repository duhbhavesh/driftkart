import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { checkItem } from '../../utils/arrayFunction';
import { handleAddToCartItem } from '../../utils/serverRequest';
import toast from 'react-hot-toast';

export const AddToCartButton = ({ product }) => {
   const navigate = useNavigate();
   const { state, dispatch } = useData();
   const { cart } = state;

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleAddToCartItem({
                  state,
                  dispatch,
                  product,
                  notify,
                  navigate,
               })
            }
            className='btn btn-primary btn-cart'
            type='button'>
            {checkItem(cart, product).length === 0
               ? 'Add to Cart'
               : 'Go to Cart'}
         </button>
      </>
   );
};
