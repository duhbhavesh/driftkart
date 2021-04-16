import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { WishList } from './pages/WishList/WishList';
import { Cart } from './pages/Cart/Cart';
import { Footer } from './components/Footer/Footer';

const App = () => {
   return (
      <div className='App'>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
         <Footer />
      </div>
   );
};

export default App;
