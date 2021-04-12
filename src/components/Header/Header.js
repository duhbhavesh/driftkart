import { useData } from '../../context/DataContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
   const { state, dispatch } = useData();
   const { wishList, cart } = state;
   const [sidebar, setSidebar] = useState(false);

   const handleSidebar = () => {
      console.log('clicked');
      setSidebar(!sidebar);
   };

   return (
      <>
         <div className='container-nav'>
            <nav class='navbar-sm'>
               <div class='navbar'>
                  <ul class='nav-items'>
                     <li class='nav-item navbar-link'>
                        <button
                           onClick={handleSidebar}
                           class='btn btn-link btn-bars nav-item-link'
                           id='sidebarCollapse'>
                           <i class='fas fa-bars'></i>
                        </button>
                     </li>
                     <li class='nav-item navbar-link'>
                        <a class='navbar-brand nav-item-link' href='/'>
                           Brand
                        </a>
                     </li>
                  </ul>
                  <ul class='nav-items'>
                     <li class='nav-item navbar-link'>
                        <Link to='/wishlist'>
                           <a class='nav-item-link'>
                              <i class='fas fa-heart'></i>
                              <span class='badge badge-error badge-top'>
                                 {wishList.length}
                              </span>
                           </a>
                        </Link>
                     </li>
                     <li class='nav-item navbar-link'>
                        <Link to='/cart'>
                           <a href='' class='nav-item-link'>
                              <i class='fas fa-shopping-cart'></i>
                              <span class='badge badge-error badge-top'>
                                 {cart.length}
                              </span>
                           </a>
                        </Link>
                     </li>
                     <li class='nav-item navbar-link'>
                        <a class='nav-item-link'>
                           <i class='fas fa-user'></i>
                        </a>
                     </li>
                  </ul>
               </div>
               <form class='form-inline'>
                  <input
                     class='input-box form-control'
                     type='search'
                     placeholder='Search for products...'
                     aria-label='Search'
                  />
                  <button class='btn btn-search' type='submit'>
                     <i class='fas fa-search'></i>
                  </button>
               </form>
            </nav>

            <nav class='navbar navbar-md'>
               <Link to='/'>
                  <a class='navbar-brand navbar-link nav-item-link' href='#'>
                     Brand
                  </a>
               </Link>

               <ul class='nav-items'>
                  <li class='nav-item navbar-link'>
                     <Link to='/products'>
                        <a href='#' class='nav-item-link'>
                           Products
                        </a>
                     </Link>
                  </li>
                  <li class='nav-item navbar-link'>
                     <Link to='/sale'>
                        <a href='#' class='nav-item-link'>
                           Sale
                        </a>
                     </Link>
                  </li>
                  <li class='nav-item navbar-link'>
                     <Link to='/offers'>
                        <a href='#' class='nav-item-link'>
                           Offers
                        </a>
                     </Link>
                  </li>
               </ul>
               <form class='form-inline'>
                  <input
                     class='input-box form-control'
                     type='search'
                     placeholder='Search for products...'
                     aria-label='Search'
                  />
                  <button class='btn btn-search' type='submit'>
                     <i class='fas fa-search'></i>
                  </button>
               </form>
               <ul class='nav-items'>
                  <li class='nav-item navbar-link'>
                     <Link to='/wishlist'>
                        <a class='nav-item-link'>
                           <i class='fas fa-heart'></i>
                           <span class='badge badge-error badge-top'>
                              {wishList.length}
                           </span>
                        </a>
                     </Link>
                  </li>
                  <li class='nav-item navbar-link'>
                     <Link to='/cart'>
                        <a class='nav-item-link'>
                           <i class='fas fa-shopping-cart'></i>
                           <span class='badge badge-error badge-top'>
                              {cart.length}
                           </span>
                        </a>
                     </Link>
                  </li>
                  <li class='nav-item navbar-link'>
                     <Link to='/profile'>
                        <a class='nav-item-link'>
                           <i class='fas fa-user'></i>
                        </a>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>

         <div
            onClick={() => setSidebar(false)}
            class={
               sidebar ? 'sidebar-overlay active' : 'sidebar-overlay'
            }></div>
         <nav class={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
            <div class='sidebar-header'>
               <div class='container-sidebar'>
                  <div class='sidebar-top'>
                     <div class='sidebar-login'>
                        <a class='btn btn-primary' href='#'>
                           <i class='fas fas-sidebar fas-sidebar-user fa-user'></i>
                           Log In
                        </a>
                     </div>

                     <div class='sidebar-close'>
                        <button
                           onClick={handleSidebar}
                           type='button'
                           id='sidebarCollapseX'
                           class='btn btn-link btn-close'>
                           <i class='fas fa-times'></i>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <ul class='sidebar-links'>
               <li>
                  <Link to='/products'>
                     <a href='#' class='nav-item-link'>
                        <i class='fas fa-list'></i>
                        <span class='sidebar-link'>Products</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/sale'>
                     <a href='#' class='nav-item-link'>
                        <i class='fas fa-shopping-bag'></i>
                        <span class='sidebar-link'>Sale</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/offers'>
                     <a href='#' class='nav-item-link'>
                        <i class='fas fa-receipt'></i>
                        <span class='sidebar-link'>Offers</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/support'>
                     <a href='#' class='nav-item-link'>
                        <i class='fas fa-question'></i>
                        <span class='sidebar-link'>Support</span>
                     </a>
                  </Link>
               </li>
               <li>
                  <Link to='/contact'>
                     <a href='#' class='nav-item-link'>
                        <i class='fas fa-phone'></i>
                        <span class='sidebar-link'>Contact</span>
                     </a>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};
