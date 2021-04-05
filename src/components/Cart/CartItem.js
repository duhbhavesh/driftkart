import { useData } from '../../context/DataContext';

export const CartItem = ({ product }) => {
   const { state, dispatch } = useData();

   const handleIncrementQty = (product) => {
      return dispatch({ type: 'INC_QTY', payload: product });
   };

   const handleDecrementQty = (product) => {
      return dispatch({ type: 'DEC_QTY', payload: product });
   };

   const handleRemoveCartItem = (product) => {
      return dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
   };

   return (
      <div style={{ border: '1px solid', padding: '1rem', margin: '1rem' }}>
         <h2>{product.name}</h2>
         <p>Rs.{product.price}</p>
         <button onClick={() => handleDecrementQty(product)}>-</button>
         <span>Qty: {product.quantity}</span>
         <button onClick={() => handleIncrementQty(product)}>+</button>
         <button onClick={() => handleRemoveCartItem(product)}>
            Remove from Cart
         </button>
      </div>
   );
};
