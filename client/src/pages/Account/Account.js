import './Account.css';
import { SidebarAccount } from '../../components/Sidebar/SidebarAccount/SidebarAccount';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export const Account = () => {
   const {
      authState: { user },
      handleUserLogout,
      authDispatch,
   } = useAuth();

   const notify = (message) => toast.success(message);

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-sidebar'>
               <SidebarAccount />
            </div>
            <div className='wrapper-account'>
               <div className='container-profile'>
                  <div className='card-profile'>
                     <h3 className='title-profile'>Profile Details</h3>
                     <div className='input-group profile-info'>
                        <div className='profile-label'>
                           <span className='profile-label-title'>E-mail :</span>
                           <span className='profile-input'>{user?.email}</span>
                        </div>
                     </div>
                     <div className='input-group profile-info'>
                        <div className='profile-label'>
                           <span className='profile-label-title'>
                              First Name :
                           </span>
                           <span className='profile-input'>
                              {user?.firstName}
                           </span>
                        </div>
                     </div>
                     <div className='input-group profile-info'>
                        <div className='profile-label'>
                           <span className='profile-label-title'>
                              Last Name :
                           </span>
                           <span className='profile-input'>
                              {user?.lastName}
                           </span>
                        </div>
                     </div>
                     <button
                        onClick={() => handleUserLogout(authDispatch, notify)}
                        className='btn btn-primary btn-account-auth'>
                        Log Out
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
