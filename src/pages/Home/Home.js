import Slider from '../../components/Carousel/Slider';
import { SliderData } from '../../components/Carousel/SliderData';
import { HomeCategories } from './HomeCategories';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
   return (
      <>
         <Slider slides={SliderData} />
         <section className='categories'>
            {HomeCategories.map(({ label, img, link }) => {
               return (
                  <Link to={link}>
                     <div className='category-card' key={label}>
                        <div className='category-heading'>
                           <h3 className='category-title'>{label}</h3>
                        </div>
                        <div className='category-image'>
                           <img className='category-img' src={img} alt=''></img>
                        </div>
                     </div>
                  </Link>
               );
            })}
         </section>
      </>
   );
};
