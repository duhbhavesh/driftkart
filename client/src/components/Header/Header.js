import { useData } from '../../context/DataContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DesktopNavDataLeft } from './HeaderData';
import { Sidebar } from '../Sidebar/Sidebar';
import Logo from '../../drift.svg';
import './Header.css';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export const Header = () => {
   const { state } = useData();
   const { wishList, cart } = state;
   const {
      authState: { token },
      handleUserLogout,
      authDispatch,
   } = useAuth();
   const [showSidebar, setShowSidebar] = useState(false);
   const notify = (message) => toast.success(message);

   const handleSidebar = () => {
      setShowSidebar(!showSidebar);
   };

   return (
      <>
         <div className='container-nav'>
            <nav className='navbar-sm'>
               <div className='navbar'>
                  <ul className='nav-items'>
                     <li className='nav-item navbar-link' id='nav-item-sidebar'>
                        <button
                           onClick={handleSidebar}
                           className='btn btn-link btn-bars nav-item-link'
                           id='sidebarCollapse'>
                           <i className='fas fa-bars'></i>
                        </button>
                     </li>
                     <li className='nav-item navbar-link'>
                        <Link to='/' className='navbar-brand nav-item-link'>
                           <img
                              src={Logo}
                              alt='Driftkart logo'
                              id='navbar-logo'
                           />
                           <span>Driftkart</span>
                        </Link>
                     </li>
                  </ul>
                  <ul className='nav-items'>
                     <li className='nav-item navbar-link'>
                        <Link to='/wishlist' className='nav-item-link'>
                           <i className='fas fa-heart'></i>
                           {token && (
                              <span className='badge badge-error badge-top'>
                                 {wishList.length}
                              </span>
                           )}
                        </Link>
                     </li>
                     <li className='nav-item navbar-link'>
                        <Link to='/cart' className='nav-item-link'>
                           <i className='fas fa-shopping-cart'></i>
                           {token && (
                              <span className='badge badge-error badge-top'>
                                 {cart.length}
                              </span>
                           )}
                        </Link>
                     </li>
                     {token ? (
                        <li className='nav-item navbar-link'>
                           <button
                              className='btn btn-primary btn-auth'
                              onClick={() =>
                                 handleUserLogout(authDispatch, notify)
                              }>
                              Log Out
                           </button>
                        </li>
                     ) : (
                        <li className='nav-item navbar-link'>
                           <Link to='/login' className='nav-item-link'>
                              <button className='btn btn-primary btn-auth'>
                                 Log In
                              </button>
                           </Link>
                        </li>
                     )}
                  </ul>
               </div>
               <form className='form-inline'>
                  <input
                     className='input-box form-control'
                     type='search'
                     placeholder='Search for products...'
                     aria-label='Search'
                  />
                  <button className='btn btn-search' type='submit'>
                     <i className='fas fa-search'></i>
                  </button>
               </form>
            </nav>

            <nav className='navbar navbar-md'>
               <Link to='/' className='navbar-brand navbar-link nav-item-link'>
                  <img src={Logo} alt='Driftkart logo' id='navbar-logo' />
                  <span>Driftkart</span>
               </Link>

               <ul className='nav-items'>
                  {DesktopNavDataLeft.map((item) => (
                     <li key={item.index} className='nav-item navbar-link'>
                        <Link to={item.link} className='nav-item-link'>
                           {item.name}
                        </Link>
                     </li>
                  ))}
               </ul>

               <form className='form-inline'>
                  <input
                     className='input-box form-control'
                     type='search'
                     placeholder='Search for products...'
                     aria-label='Search'
                  />
                  <button className='btn btn-search' type='submit'>
                     <i className='fas fa-search'></i>
                  </button>
               </form>
               <ul className='nav-items'>
                  <li className='nav-item navbar-link'>
                     <Link to='/wishlist' className='nav-item-link'>
                        <i className='fas fa-heart'></i>
                        {token && (
                           <span className='badge badge-error badge-top'>
                              {wishList.length}
                           </span>
                        )}
                     </Link>
                  </li>
                  <li className='nav-item navbar-link'>
                     <Link to='/cart' className='nav-item-link'>
                        <i className='fas fa-shopping-cart'></i>
                        {token && (
                           <span className='badge badge-error badge-top'>
                              {cart.length}
                           </span>
                        )}
                     </Link>
                  </li>
                  {token ? (
                     <li className='nav-item navbar-link'>
                        <button
                           className='btn btn-primary btn-auth'
                           onClick={() =>
                              handleUserLogout(authDispatch, notify)
                           }>
                           Log Out
                        </button>
                     </li>
                  ) : (
                     <li className='nav-item navbar-link'>
                        <Link to='/login' className='nav-item-link'>
                           <button className='btn btn-primary btn-auth'>
                              Log In
                           </button>
                        </Link>
                     </li>
                  )}
               </ul>
            </nav>

            {/* Mobile Sidebar */}
            <Sidebar
               showSidebar={showSidebar}
               setShowSidebar={setShowSidebar}
            />
         </div>
      </>
   );
};
