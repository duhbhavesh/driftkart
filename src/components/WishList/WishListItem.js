import { useData } from '../../context/DataContext';

export const WishListItem = ({ product }) => {
   const { state, dispatch } = useData();

   const handleRemoveWishListItem = (product) => {
      console.log('removing');
      return dispatch({ type: 'REMOVE_WISHLIST_ITEM', payload: product });
   };

   return (
      <div style={{ border: '1px solid', padding: '1rem', margin: '1rem' }}>
         <h2>{product.name}</h2>
         <p>Rs.{product.price}</p>
         <button onClick={() => handleRemoveWishListItem(product)}>
            Remove
         </button>
      </div>
   );
};
