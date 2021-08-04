import { ProductItem } from '../../components/Product/ProductItem';
import { useData } from '../../context/DataContext';
import {
   getSortedData,
   getFilteredData,
   Filter,
   getFilteredCategory,
   getFilteredRating,
} from '../../components/Filter/Filter';
import './Products.css';

export const Products = () => {
   const { state } = useData();
   const {
      products,
      sortBy,
      showInventory,
      showFastDelivery,
      categories,
      ratings,
   } = state;

   const sortedData = getSortedData(products, sortBy);
   const filteredByCategory = getFilteredCategory(sortedData, categories);
   const filteredByRating = getFilteredRating(filteredByCategory, ratings);
   const filteredData = getFilteredData(filteredByRating, {
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
               {filteredData?.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
               })}
            </div>
         </div>
      </div>
   );
};
