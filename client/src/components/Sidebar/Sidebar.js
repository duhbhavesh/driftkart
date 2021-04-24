import { SidebarData } from '../Sidebar/SidebarData';
import { Link } from 'react-router-dom';

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
   return (
      <>
         <div
            onClick={() => setShowSidebar(false)}
            className={
               showSidebar ? 'sidebar-overlay active' : 'sidebar-overlay'
            }></div>

         <nav className={showSidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
            <div className='sidebar-header'>
               <div className='container-sidebar'>
                  <div className='sidebar-top'>
                     <div className='sidebar-login'>
                        <a className='btn btn-primary' href='/'>
                           <i className='fas fas-sidebar fas-sidebar-user fa-user'></i>
                           Log In
                        </a>
                     </div>

                     <div className='sidebar-close'>
                        <button
                           onClick={() => setShowSidebar(false)}
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
               {SidebarData.map((item) => (
                  <li key={item.index}>
                     <Link to={item.link}>
                        <i className={item.iconClassName}></i>
                        <span className='sidebar-link'>{item.title}</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   );
};
