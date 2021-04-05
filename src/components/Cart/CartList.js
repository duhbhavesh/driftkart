import { useData } from '../../context/DataContext';
import { CartItem } from './CartItem';

export const CartList = () => {
   const { state, dispatch } = useData();
   const { cart } = state;

   return (
      <div>
         <h2>Cart</h2>
         <div>
            {cart.map((product) => {
               return <CartItem key={product.id} product={product} />;
            })}
         </div>
      </div>
   );
};
