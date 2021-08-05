import { useLocation } from 'react-router';
import {
   Filter,
   getFilteredCategory,
   getFilteredData,
   getFilteredRating,
   getSortedData,
} from '../../components/Filter/Filter';
import { useData } from '../../context/DataContext';
import { ProductItem } from '../../components/Product/ProductItem';
import './SearchResults.css';

export const SearchResults = () => {
   const { state } = useData();
   const {
      products,
      sortBy,
      showInventory,
      showFastDelivery,
      categories,
      ratings,
   } = state;

   const query = new URLSearchParams(useLocation().search).get('query');
   const sortedData = getSortedData(products, sortBy);
   const filteredByCategory = getFilteredCategory(sortedData, categories);
   const filteredByRating = getFilteredRating(filteredByCategory, ratings);
   const filteredData = getFilteredData(filteredByRating, {
      showInventory,
      showFastDelivery,
   });
   const searchResults = filteredData.filter(
      (item) =>
         item.name.toLowerCase().includes(query.toLowerCase()) ||
         item.brand.toLowerCase().includes(query.toLowerCase()),
   );

   return (
      <>
         <div className='wrapper'>
            <div className='wrapper-filter'>
               <Filter />
            </div>
            <div className='wrapper-products'>
               <div className='row products'>
                  {searchResults.length > 0 ? (
                     searchResults?.map((product) => {
                        return (
                           <ProductItem key={product.id} product={product} />
                        );
                     })
                  ) : (
                     <div className='zero-search-results'>
                        <h3 className='zero-search-title'>
                           Sorry, no results found!
                        </h3>
                        <p className='zero-search-desc'>
                           Try checking your spelling or use more general terms
                        </p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};
