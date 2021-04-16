import { useData } from '../context/DataContext';
import { WishListItem } from '../components/WishList/WishListItem';
import './WishList.css';

export const WishList = () => {
   const { state, dispatch } = useData();
   const { wishList } = state;

   return (
      <div className='container'>
         <h3 className='title-sec'>Wishlist</h3>
         {wishList.length === 0 ? (
            <h4>Your wishlist is Empty</h4>
         ) : (
            <div className='wrapper-wishlist'>
               {wishList.map((product) => (
                  <WishListItem key={product.id} product={product} />
               ))}
            </div>
         )}
      </div>
   );
};
