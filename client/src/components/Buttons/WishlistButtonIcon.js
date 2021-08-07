import { useData } from '../../context/DataContext';
import { checkItem } from '../../utils/utils';
import { handleToggleWishList } from '../../utils/serverRequest';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export const WishlistButtonIcon = ({ product }) => {
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
            }
            className='btn btn-square btn-circle btn-top-right btn-wishlist'
            type='button'>
            <i
               className={
                  !checkItem(wishList, product.id)
                     ? 'far fa-heart fa-heart-product'
                     : 'fas fa-heart fa-heart-product active'
               }></i>
         </button>
      </>
   );
};
