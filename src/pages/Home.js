import Slider from '../components/Carousel/Slider';
import { SliderData } from '../components/Carousel/SliderData';

export const Home = () => {
   return (
      <>
         <Slider slides={SliderData} />
         {/* <section className=""></section> */}
      </>
   );
};
