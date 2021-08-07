import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleToggleWishList } from '../../utils/serverRequest';
import { checkItem } from '../../utils/utils';

export const WishListButton = ({ product }) => {
   const navigate = useNavigate();
   const { state, dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();
   const { wishList } = state;

   const notify = (message) => toast.success(message);

   const handleAddItemError = () => {
      toast.error('Please Login to Add Item');
      navigate('/login');
   };

   return (
      <>
         <button
            className='btn btn-secondary'
            onClick={() =>
               token
                  ? handleToggleWishList({
                       state,
                       dispatch,
                       product,
                       notify,
                       token,
                    })
                  : handleAddItemError()
            }>
            <span>
               <i className='fas fa-heart fa-heart-product fa-heart-product-md'></i>
            </span>
            {!checkItem(wishList, product.id)
               ? 'Add to Wishlist'
               : 'Remove from Wishlist'}
         </button>
      </>
   );
};
