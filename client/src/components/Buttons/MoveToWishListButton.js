import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleMoveItemToWishlist } from '../../utils/serverRequest';

export const MoveToWishListButton = ({ product }) => {
   const { state, dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() => {
               handleMoveItemToWishlist({
                  state,
                  dispatch,
                  product,
                  notify,
                  token,
               });
            }}
            className='btn cart-item-btn'>
            Move to Wishlist
         </button>
      </>
   );
};
