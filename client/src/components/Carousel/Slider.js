import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = ({ slides }) => {
   const [current, setCurrent] = useState(0);
   const length = slides.length;

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
   };

   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
   };

   if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
   }

   return (
      <section className='slider'>
         <i onClick={prevSlide} className='fas fa-chevron-left l-arrow'></i>
         <i onClick={nextSlide} className='fas fa-chevron-right r-arrow'></i>
         {SliderData.map((slide, index) => {
            return (
               <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}>
                  {index === current && (
                     <Link to='/shop'>
                        <img
                           src={slide.image}
                           alt={slide.alt}
                           className='image'
                        />
                     </Link>
                  )}
               </div>
            );
         })}
      </section>
   );
};

export default Slider;
