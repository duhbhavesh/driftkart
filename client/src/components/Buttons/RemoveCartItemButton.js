import toast from 'react-hot-toast';
import { useData } from '../../context/DataContext';
import { handleRemoveCartItem } from '../../utils/serverRequest';

export const RemoveCartItemButton = ({ product }) => {
   const { state, dispatch } = useData();

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleRemoveCartItem({ state, dispatch, product, notify })
            }
            className='btn cart-item-btn'>
            Remove
         </button>
      </>
   );
};
