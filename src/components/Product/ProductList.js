import { ProductItem } from './ProductItem';
import { useData } from '../../context/DataContext';
import { getSortedData, getFilteredData, Filter } from './Filter';

export const ProductList = () => {
   const { state, dispatch } = useData();
   const { products, sortBy, showInventory, showFastDelivery } = state;

   const sortedData = getSortedData(products, sortBy);
   const filteredData = getFilteredData(sortedData, {
      showInventory,
      showFastDelivery,
   });
   return (
      <div>
         <h2>Products</h2>
         <Filter />
         <div>
            {filteredData.map((product) => {
               return <ProductItem key={product.id} product={product} />;
            })}
         </div>
      </div>
   );
};
