import { NavLink } from 'react-router-dom';
import './SidebarAccount.css';

export const SidebarAccount = () => {
   return (
      <>
         <div className='sidebar-account'>
            <div className='sidebar-heading'>Account Settings</div>
            <div className='sidebar-account-item'>
               <NavLink
                  to='/account'
                  activeClassName='sidebar-link-active'
                  className='sidebar-account-link'>
                  Profile Information
               </NavLink>
            </div>
            <div className='sidebar-account-item'>
               <NavLink
                  to='/address'
                  activeClassName='sidebar-link-active'
                  className='sidebar-account-link'>
                  Manage Addresses
               </NavLink>
            </div>
         </div>
      </>
   );
};
