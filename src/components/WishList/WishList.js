import { useData } from '../../context/DataContext';
import { WishListItem } from './WishListItem';

export const WishList = () => {
   const { state, dispatch } = useData();
   const { wishList } = state;

   return (
      <div>
         <h2>Wish List</h2>
         <div>
            {wishList.map((product) => (
               <WishListItem key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
};
