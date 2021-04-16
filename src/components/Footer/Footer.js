import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <>
         <footer className='footer'>
            <div className='container'>
               <div className='footer-content'>
                  <div className='footer-logo'>
                     <Link to='/'>
                        <p className='footer-logo'>DriftKart</p>
                     </Link>
                  </div>
                  <div className='footer-copyright'>
                     <p className='footer-copyright-txt'>© 2021, DriftKart.</p>
                  </div>
               </div>
               <div className='footer-icons'>
                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/duhbhavesh'>
                        <i class='fab fa-github'></i>
                     </a>
                  </div>
                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://twitter.com/duhbhavesh'>
                        <i class='fab fa-twitter'></i>
                     </a>
                  </div>
                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/bhavesh-kasturi/'>
                        <i class='fab fa-linkedin'></i>
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};
