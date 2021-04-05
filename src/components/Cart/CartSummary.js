import { useData } from '../../context/DataContext';

const getAmount = (items) => {
   return items.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0,
   );
};

export const CartSummary = () => {
   const { state } = useData();
   const { cart } = state;

   return (
      <>
         <h4>Price Details - {cart.length} items</h4>
         <h2>Total Amount Rs.{getAmount(cart).toFixed(2)} </h2>
      </>
   );
};
