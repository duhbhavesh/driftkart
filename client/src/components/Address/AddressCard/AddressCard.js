import { useAuth } from '../../../context/AuthContext';
import { useData } from '../../../context/DataContext';
import { handleRemoveAddress } from '../../../utils/serverRequest';
import toast from 'react-hot-toast';
import './AddressCard.css';

export const AddressCard = ({
   currentAddress,
   address,
   setAddress,
   setAddressForm,
   setEditAddress,
}) => {
   const { dispatch } = useData();
   const {
      authState: { token },
   } = useAuth();

   const notify = (message) => toast.success(message);

   const handleEditAddress = () => {
      setAddressForm(() => true);
      setAddress(() => ({
         name: currentAddress.name,
         mobile: currentAddress.mobile,
         address: currentAddress.address,
         city: currentAddress.city,
         state: currentAddress.state,
         pincode: currentAddress.pincode,
      }));
      setEditAddress(() => currentAddress.id);
   };

   return (
      currentAddress && (
         <div className='address-card'>
            <input
               type='radio'
               className='address-radio'
               name='address'
               checked
            />
            <div className='address-details'>
               <div className='address-info'>
                  <div className='address-data'>
                     <span className='address-bold'>
                        {currentAddress.name} - {currentAddress.mobile}
                     </span>
                  </div>
               </div>
               <div className='address-info'>
                  <div className='address-data'>
                     {currentAddress.address} {currentAddress.city}
                     <div className='address-data'>
                        {currentAddress.state} -{' '}
                        <span className='address-bold'>
                           {currentAddress.pincode}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className='address-buttons'>
               <button
                  onClick={() =>
                     handleRemoveAddress(
                        dispatch,
                        token,
                        currentAddress.id,
                        notify,
                     )
                  }
                  className='btn btn-secondary'>
                  Remove
               </button>
               <button onClick={handleEditAddress} className='btn btn-primary'>
                  Edit
               </button>
            </div>
         </div>
      )
   );
};
