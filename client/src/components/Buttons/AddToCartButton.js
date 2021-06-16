import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { checkItem } from '../../utils/utils';
import { handleAddToCartItem } from '../../utils/serverRequest';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export const AddToCartButton = ({ product }) => {
   const navigate = useNavigate();
   const { state, dispatch } = useData();
   const {
      state: { token },
   } = useAuth();
   const { cart } = state;

   const notify = (message) => toast.success(message);

   const handleAddItemError = () => {
      toast.error('Please Login to Add Item');
      navigate('/login');
   };

   return (
      <>
         <button
            onClick={() =>
               token
                  ? handleAddToCartItem({
                       state,
                       dispatch,
                       product,
                       notify,
                       navigate,
                       token,
                    })
                  : handleAddItemError()
            }
            className='btn btn-primary btn-cart'
            type='button'>
            {token
               ? checkItem(cart, product).length === 0
                  ? 'Add to Cart'
                  : 'Go to Cart'
               : 'Add to Cart'}
         </button>
      </>
   );
};
