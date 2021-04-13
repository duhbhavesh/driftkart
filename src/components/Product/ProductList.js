import { ProductItem } from './ProductItem';
import { useData } from '../../context/DataContext';
import { getSortedData, getFilteredData, Filter } from './Filter';
import './ProductList.css';

export const ProductList = () => {
   const { state, dispatch } = useData();
   const { products, sortBy, showInventory, showFastDelivery } = state;

   const sortedData = getSortedData(products, sortBy);
   const filteredData = getFilteredData(sortedData, {
      showInventory,
      showFastDelivery,
   });
   return (
      <div className='wrapper'>
         <div className='wrapper-filter'>
            <Filter />
         </div>
         <div className='wrapper-products'>
            <div className='row products'>
               {filteredData.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
               })}
            </div>
         </div>
      </div>
   );
};
