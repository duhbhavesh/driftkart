import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { WishList } from './pages/WishList';
import { Cart } from './pages/Cart';
import { Header } from './components/Header/Header';

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
      </div>
   );
};

export default App;
