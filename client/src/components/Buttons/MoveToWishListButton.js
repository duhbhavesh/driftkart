import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { handleMoveItemToWishlist } from '../../utils/serverRequest';

export const MoveToWishListButton = ({ product }) => {
   const { state, dispatch } = useData();

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleMoveItemToWishlist({ state, dispatch, product, notify })
            }
            className='btn cart-item-btn'>
            Move to Wishlist
         </button>
      </>
   );
};
