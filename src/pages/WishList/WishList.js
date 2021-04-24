import { useData } from '../../context/DataContext';
import { WishListItem } from '../../components/WishList/WishListItem';
import './WishList.css';

export const WishList = () => {
   const { state } = useData();
   const { wishList } = state;

   return (
      <>
         <section className='wishlist-sec'>
            <h2 className='wishlist-heading'>Wishlist</h2>
            {wishList.length === 0 ? (
               <h3 className='wishlist-info'>Your wishlist is Empty</h3>
            ) : (
               <div className='wrapper-wishlist'>
                  {wishList.map((product) => (
                     <WishListItem key={product.id} product={product} />
                  ))}
               </div>
            )}
         </section>
      </>
   );
};
