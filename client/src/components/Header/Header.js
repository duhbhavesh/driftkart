import { useData } from '../../context/DataContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar/Sidebar';
import Logo from '../../drift.svg';
import { useAuth } from '../../context/AuthContext';
import { SearchBarDesktop } from '../SearchBar/SearchBarDesktop';
import { SideBarMobile } from '../SearchBar/SearchBarMobile';
import './Header.css';

export const Header = () => {
   const { state } = useData();
   const { wishList, cart } = state;
   const {
      authState: { token },
   } = useAuth();
   const [showSidebar, setShowSidebar] = useState(false);
   const [searchInput, setSearchInput] = useState('');

   const navigate = useNavigate();

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
                     <li className='nav-item navbar-link'>
                        <Link to='/account' className='nav-item-link'>
                           <i title='account' className='fas fa-user'></i>
                        </Link>
                     </li>
                  </ul>
               </div>
               <SideBarMobile
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  navigate={navigate}
               />
            </nav>

            <nav className='navbar navbar-md'>
               <Link to='/' className='navbar-brand navbar-link nav-item-link'>
                  <img src={Logo} alt='Driftkart logo' id='navbar-logo' />
                  <span>Driftkart</span>
               </Link>

               <SearchBarDesktop
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  navigate={navigate}
               />

               <ul className='nav-items'>
                  <li className='nav-item navbar-link'>
                     <Link to='/shop' className='nav-item-link'>
                        <i title='shop' className='fas fa-store'></i>
                     </Link>
                  </li>

                  <li className='nav-item navbar-link'>
                     <Link to='/wishlist' className='nav-item-link'>
                        <i title='wishlist' className='fas fa-heart'></i>
                        {token && (
                           <span className='badge badge-error badge-top'>
                              {wishList.length}
                           </span>
                        )}
                     </Link>
                  </li>
                  <li className='nav-item navbar-link'>
                     <Link to='/cart' className='nav-item-link'>
                        <i title='cart' className='fas fa-shopping-cart'></i>
                        {token && (
                           <span className='badge badge-error badge-top'>
                              {cart.length}
                           </span>
                        )}
                     </Link>
                  </li>
                  <li className='nav-item navbar-link'>
                     <Link to='/account' className='nav-item-link'>
                        <i title='account' className='fas fa-user'></i>
                     </Link>
                  </li>
               </ul>
            </nav>

            <Sidebar
               showSidebar={showSidebar}
               setShowSidebar={setShowSidebar}
            />
         </div>
      </>
   );
};
