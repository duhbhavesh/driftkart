import { useData } from '../../context/DataContext';
import { checkItem } from '../../utils/arrayFunction';
import { handleAddRemoveWishlistItem } from '../../utils/serverRequest';
import toast from 'react-hot-toast';

export const WishListButton = ({ product }) => {
   const { state, dispatch } = useData();
   const { wishList } = state;

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleAddRemoveWishlistItem({ state, dispatch, product, notify })
            }
            className='btn btn-square btn-circle btn-top-right btn-wishlist'
            type='button'>
            <i
               className={
                  checkItem(wishList, product).length === 0
                     ? 'far fa-heart fa-heart-product'
                     : 'fas fa-heart fa-heart-product active'
               }></i>
         </button>
      </>
   );
};
