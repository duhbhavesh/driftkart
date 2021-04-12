import { useData } from '../../context/DataContext';
import { WishListItem } from './WishListItem';

export const WishList = () => {
   const { state, dispatch } = useData();
   const { wishList } = state;

   return (
      <div className='container'>
         <h3 className='title-sec'>Wishlist</h3>
         <div className='wishlist-wrapper'>
            {wishList.map((product) => (
               <WishListItem key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
};
