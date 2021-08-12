import { AddressForm } from '../../../components/Address/AddressForm/AddressForm';
import { SidebarAccount } from '../../../components/Sidebar/SidebarAccount/SidebarAccount';
import './Address.css';

export const Address = () => {
   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarAccount />
            </div>
            <div className='wrapper-account'>
               <AddressForm />
            </div>
         </div>
      </>
   );
};
