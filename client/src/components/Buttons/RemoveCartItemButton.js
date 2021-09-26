import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { handleRemoveCartItem } from '../../utils/serverRequest';

export const RemoveCartItemButton = ({ product }) => {
   const { state, dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();

   const notify = (message) => toast.success(message);

   return (
      <>
         <button
            onClick={() =>
               handleRemoveCartItem({ state, dispatch, product, notify, token })
            }
            className='btn cart-item-btn'>
            Remove
         </button>
      </>
   );
};
