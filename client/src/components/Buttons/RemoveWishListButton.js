import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { handleRemoveWishListItem } from '../../utils/serverRequest';

export const RemoveWishlistButton = ({ product }) => {
   const { state, dispatch } = useData();

   const notify = (message) => toast.success(message);

   return (
      <button
         onClick={() =>
            handleRemoveWishListItem({ state, dispatch, product, notify })
         }
         className='btn btn-square btn-circle btn-top-right'
         type='button'>
         <i className='far fa-trash-alt'></i>
      </button>
   );
};
