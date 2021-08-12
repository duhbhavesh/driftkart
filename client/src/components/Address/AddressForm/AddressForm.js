import { useState } from 'react';
import { useData } from '../../../context/DataContext';
import { useAuth } from '../../../context/AuthContext';
import './AddressForm.css';
import {
   handleAddAddressToDB,
   handleUpdateAddress,
} from '../../../utils/serverRequest';
import { AddressCard } from '../AddressCard/AddressCard';
import toast from 'react-hot-toast';

const isValidMobile = (mobile) => {
   const mobileRegex = new RegExp(/^[6-9]\d{9}$/gi);
   return mobileRegex.test(mobile);
};

const isValidPincode = (pincode) => {
   const pincodeRegex = new RegExp(/^[1-9][0-9]{5}$/);
   return pincodeRegex.test(pincode);
};

export const AddressForm = () => {
   const initialAddressState = {
      name: '',
      mobile: '',
      address: '',
      city: '',
      state: 'Maharashtra',
      pincode: '',
   };
   const addressErrorState = {
      name: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
   };

   const {
      state: { addresses },
      dispatch,
   } = useData();

   const {
      authState: { token },
   } = useAuth();

   const notify = (message) => toast.success(message);

   const [address, setAddress] = useState(initialAddressState);
   const [error, setError] = useState(addressErrorState);
   const [addressForm, setAddressForm] = useState(false);
   const [editAddress, setEditAddress] = useState('');

   const handleOnChangeInput = (e) => {
      setAddress({ ...address, [e.target.name]: e.target.value });
   };

   const handleAddressFormValidate = () => {
      setError(addressErrorState);
      let successVailidation = true;
      if (!address.name) {
         setError((error) => ({
            ...error,
            name: 'Please enter a valid name',
         }));
         successVailidation = false;
      }

      if (!address.mobile || !isValidMobile(address.mobile)) {
         setError((error) => ({
            ...error,
            mobile: 'Please enter a valid mobile no',
         }));
         successVailidation = false;
      }

      if (!address.address) {
         setError((error) => ({
            ...error,
            address: 'Please enter a valid address',
         }));
         successVailidation = false;
      }

      if (!address.city) {
         setError((error) => ({
            ...error,
            city: 'Please enter a valid city',
         }));
         successVailidation = false;
      }

      if (!address.state) {
         setError((error) => ({
            ...error,
            state: 'Please enter a valid state',
         }));
         successVailidation = false;
      }

      if (!address.pincode || !isValidPincode(address.pincode)) {
         setError((error) => ({
            ...error,
            pincode: 'Please enter a valid pincode',
         }));
         successVailidation = false;
      }

      return successVailidation;
   };

   const handleSuccess = () => {
      setAddress(initialAddressState);
      setAddressForm(false);
   };

   const handleCancel = () => {
      setAddress(initialAddressState);
      if (addressForm) {
         setAddressForm(false);
      }
   };

   const handleAddAddress = async () => {
      if (handleAddressFormValidate()) {
         if (editAddress) {
            await handleUpdateAddress(
               dispatch,
               token,
               address,
               editAddress,
               handleSuccess,
               notify,
            );
            setEditAddress(() => '');
         } else {
            handleAddAddressToDB(
               dispatch,
               token,
               address,
               handleSuccess,
               notify,
            );
         }
      }
   };

   return (
      <>
         <div className='wrapper-address-form'>
            {(addressForm || addresses.length === 0) && (
               <div className='address-form'>
                  <div className='address-form-heading'>Address Form</div>
                  <div className='input-group'>
                     <input
                        type='text'
                        className='input-box input-address-form'
                        name='name'
                        placeholder='Name'
                        value={address.name}
                        onChange={handleOnChangeInput}
                     />
                     {error.name && (
                        <small className='error-text'>* {error.name}</small>
                     )}
                  </div>
                  <div className='input-group'>
                     <input
                        type='text'
                        className='input-box input-address-form'
                        name='mobile'
                        placeholder='Mobile'
                        value={address.mobile}
                        onChange={handleOnChangeInput}
                     />
                     {error.mobile && (
                        <small className='error-text'>* {error.mobile}</small>
                     )}
                  </div>
                  <div className='input-group'>
                     <input
                        type='text'
                        className='input-box input-address-form'
                        name='address'
                        placeholder='Address'
                        value={address.address}
                        onChange={handleOnChangeInput}
                     />
                     {error.address && (
                        <small className='error-text'>* {error.address}</small>
                     )}
                  </div>
                  <div className='input-group'>
                     <input
                        type='text'
                        className='input-box input-address-form'
                        name='city'
                        placeholder='City'
                        value={address.city}
                        onChange={handleOnChangeInput}
                     />
                     {error.city && (
                        <small className='error-text'>* {error.city}</small>
                     )}
                  </div>
                  <div className='input-group'>
                     <input
                        type='text'
                        className='input-box input-address-form'
                        name='state'
                        placeholder='State'
                        value={address.state}
                        onChange={handleOnChangeInput}
                     />
                     {error.state && (
                        <small className='error-text'>* {error.state}</small>
                     )}
                  </div>
                  <div className='input-group'>
                     <input
                        type='text'
                        className='input-box input-address-form'
                        name='pincode'
                        placeholder='Pin Code'
                        value={address.pincode}
                        onChange={handleOnChangeInput}
                     />
                     {error.pincode && (
                        <small className='error-text'>* {error.pincode}</small>
                     )}
                  </div>
                  <div className='address-form-buttons'>
                     <button
                        onClick={handleCancel}
                        className='btn btn-secondary'>
                        Cancel
                     </button>
                     <button
                        onClick={handleAddAddress}
                        className='btn btn-primary'>
                        Save
                     </button>
                  </div>
               </div>
            )}

            {addresses.length !== 0 ? (
               <>
                  {!addressForm && (
                     <div className='address-form-add'>
                        <button
                           onClick={() => setAddressForm(true)}
                           className='btn btn-primary'>
                           &#43; Add New Address
                        </button>
                     </div>
                  )}
                  <div className='container-address'>
                     <div className='address-form-heading'>
                        Manage Addresses
                     </div>
                     {addresses?.map((currentAddress) => {
                        return (
                           <AddressCard
                              currentAddress={currentAddress}
                              address={address}
                              setAddress={setAddress}
                              setAddressForm={setAddressForm}
                              setEditAddress={setEditAddress}
                              key={currentAddress.id}
                           />
                        );
                     })}
                  </div>
               </>
            ) : null}
         </div>
      </>
   );
};
