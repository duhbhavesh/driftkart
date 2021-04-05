import { ProductItem } from './ProductItem';
import { useData } from '../../context/DataContext';

export const ProductList = () => {
   const { state, dispatch } = useData();
   const { products } = state;

   return (
      <div>
         <h2>Products</h2>
         <div>
            {products.map((product) => {
               return <ProductItem key={product.id} product={product} />;
            })}
         </div>
      </div>
   );
};
