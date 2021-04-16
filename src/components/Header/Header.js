import { useData } from '../../context/DataContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
   const { state, dispatch } = useData();
   const { wishList, cart } = state;
   const [sidebar, setSidebar] = useState(false);

   const handleSidebar = () => setSidebar(!sidebar);

   return (
      <>
         <div className='container-nav'>
            <nav className='navbar-sm'>
               <div className='navbar'>
                  <ul className='nav-items'>
                     <li className='nav-item navbar-link'>
                        <button
                           onClick={handleSidebar}
                           className='btn btn-link btn-bars nav-item-link'
                           id='sidebarCollapse'>
                           <i className='fas fa-bars'></i>
                        </button>
                     </li>
                     <li className='nav-item navbar-link'>
                        <a className='navbar-brand nav-item-link' href='/'>
                           DriftKart
                        </a>
                     </li>
                  </ul>
                  <ul className='nav-items'>
                     <li className='nav-item navbar-link'>
                        <Link to='/wishlist'>
                           <a className='nav-item-link'>
                              <i className='fas fa-heart'></i>
                              <span className='badge badge-error badge-top'>
                                 {wishList.length}
                              </span>
                           </a>
                        </Link>
                     </li>
                     <li className='nav-item navbar-link'>
                        <Link to='/cart'>
                           <a href='' className='nav-item-link'>
                              <i className='fas fa-shopping-cart'></i>
                              <span className='badge badge-error badge-top'>
                                 {cart.length}
                              </span>
                           </a>
                        </Link>
                     </li>
                     <li className='nav-item navbar-link'>
                        <a className='nav-item-link'>
                           <i className='fas fa-user'></i>
                        </a>
                     </li>
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
               <Link to='/'>
                  <a
                     className='navbar-brand navbar-link nav-item-link'
                     href='#'>
                     DriftKart
                  </a>
               </Link>

               <ul className='nav-items'>
                  <li className='nav-item navbar-link'>
                     <Link to='/products'>
                        <a href='#' className='nav-item-link'>
                           Products
                        </a>
                     </Link>
                  </li>
                  <li className='nav-item navbar-link'>
                     <Link to='/sale'>
                        <a href='#' className='nav-item-link'>
                           Sale
                        </a>
                     </Link>
                  </li>
                  <li className='nav-item navbar-link'>
                     <Link to='/offers'>
                        <a href='#' className='nav-item-link'>
                           Offers
                        </a>
                     </Link>
                  </li>
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
                     <Link to='/wishlist'>
                        <a className='nav-item-link'>
                           <i className='fas fa-heart'></i>
                           <span className='badge badge-error badge-top'>
                              {wishList.length}
                           </span>
                        </a>
                     </Link>
                  </li>
                  <li className='nav-item navbar-link'>
                     <Link to='/cart'>
                        <a className='nav-item-link'>
                           <i className='fas fa-shopping-cart'></i>
                           <span className='badge badge-error badge-top'>
                              {cart.length}
                           </span>
                        </a>
                     </Link>
                  </li>
                  <li className='nav-item navbar-link'>
                     <Link to='/profile'>
                        <a className='nav-item-link'>
                           <i className='fas fa-user'></i>
                        </a>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>

         <div
            onClick={() => setSidebar(false)}
            className={
               sidebar ? 'sidebar-overlay active' : 'sidebar-overlay'
            }></div>
         <nav className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
            <div className='sidebar-header'>
               <div className='container-sidebar'>
                  <div className='sidebar-top'>
                     <div className='sidebar-login'>
                        <a className='btn btn-primary' href='#'>
                           <i className='fas fas-sidebar fas-sidebar-user fa-user'></i>
                           Log In
                        </a>
                     </div>

                     <div className='sidebar-close'>
                        <button
                           onClick={handleSidebar}
                           type='button'
                           id='sidebarCollapseX'
                           className='btn btn-link btn-close'>
                           <i className='fas fa-times'></i>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <ul className='sidebar-links'>
               <li>
                  <Link to='/products'>
                     <a href='#' className='nav-item-link'>
                        <i className='fas fa-list'></i>
                        <span className='sidebar-link'>Products</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/sale'>
                     <a href='#' className='nav-item-link'>
                        <i className='fas fa-shopping-bag'></i>
                        <span className='sidebar-link'>Sale</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/offers'>
                     <a href='#' className='nav-item-link'>
                        <i className='fas fa-receipt'></i>
                        <span className='sidebar-link'>Offers</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/support'>
                     <a href='#' className='nav-item-link'>
                        <i className='fas fa-question'></i>
                        <span className='sidebar-link'>Support</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/contact'>
                     <a href='#' className='nav-item-link'>
                        <i className='fas fa-phone'></i>
                        <span className='sidebar-link'>Contact</span>
                     </a>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};
