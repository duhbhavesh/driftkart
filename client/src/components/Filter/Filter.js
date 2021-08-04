import { useState } from 'react';
import { useData } from '../../context/DataContext';
import './Filter.css';
import { categories, ratings } from './FilterData';

export function getSortedData(productList, sortBy) {
   if (sortBy && sortBy === 'LOW_TO_HIGH') {
      return productList.sort((a, b) => a['price'] - b['price']);
   }
   if (sortBy && sortBy === 'HIGH_TO_LOW') {
      return productList.sort((a, b) => b['price'] - a['price']);
   }
   return productList;
}

export function getFilteredData(
   productList,
   { showFastDelivery, showInventory },
) {
   return productList
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(({ inStock }) => (showInventory ? true : inStock));
}

export function getFilteredCategory(productList, categories) {
   if (categories.length > 0) {
      productList = productList.filter((product) =>
         categories.includes(product.category),
      );
   }
   return productList;
}

export function getFilteredRating(productList, ratings) {
   if (ratings.length > 0) {
      productList = productList.filter((product) =>
         ratings.includes(product.rating),
      );
   }
   return productList;
}

export const Filter = () => {
   const { state, dispatch } = useData();
   const { sortBy, showInventory, showFastDelivery } = state;
   const [sort, showSort] = useState(false);
   const [filter, showFilter] = useState(false);

   const handleSort = () => showSort(!sort);
   const handleFilter = () => showFilter(!filter);
   const handleCategory = (category) => {
      if (state.categories.includes(category)) {
         dispatch({ type: 'REMOVE_CATEGORY', payload: category });
      } else {
         dispatch({ type: 'SET_CATEGORY', payload: category });
      }
   };
   const handleRating = (rating) => {
      if (state.ratings.includes(rating)) {
         dispatch({ type: 'REMOVE_RATING', payload: rating });
      } else {
         dispatch({ type: 'SET_RATING', payload: rating });
      }
   };
   const handleReset = () => {
      dispatch({ type: 'RESET_FILTERS' });
   };

   return (
      <>
         <aside className='filter-md'>
            <div className='filter'>
               <div className='filter-heading-box'>
                  <div className='filter-heading'>Filters</div>
                  <button
                     className='btn btn-secondary btn-clear'
                     onClick={handleReset}>
                     Clear All
                  </button>
               </div>
               <p className='filter-title'>Sort By</p>
               <div className='filter-inputs'>
                  <div className='filter-input'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                        }
                        name='sort-md'
                        type='radio'
                        checked={sortBy && sortBy === 'LOW_TO_HIGH'}
                        className='filter-input-radio'
                     />
                     Price - Low to High
                  </div>
                  <div className='filter-input'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
                        }
                        name='sort-md'
                        type='radio'
                        checked={sortBy && sortBy === 'HIGH_TO_LOW'}
                        className='filter-input-radio'
                     />
                     Price - High to Low
                  </div>
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Categories</p>
               <div className='filter-inputs'>
                  {categories.map((category) => {
                     return (
                        <div className='filter-input'>
                           <input
                              onChange={() => handleCategory(category)}
                              checked={state.categories.includes(category)}
                              name='filter-md'
                              type='checkbox'
                              className='filter-input-check'
                           />
                           {category}
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Ratings</p>
               <div className='filter-inputs'>
                  {ratings.map((rating) => {
                     return (
                        <div className='filter-input'>
                           <input
                              onChange={() => handleRating(rating)}
                              checked={state.ratings.includes(rating)}
                              name='filter-md'
                              type='checkbox'
                              className='filter-input-check'
                           />
                           {rating} ★
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Other</p>
               <div className='filter-inputs'>
                  <div className='filter-input'>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_INVENTORY' })}
                        name='filter-md'
                        type='checkbox'
                        checked={showInventory}
                        className='filter-input-check'
                     />
                     Inlcude Out of Stock
                  </div>
                  <div className='filter-input'>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_DELIVERY' })}
                        name='filter-md'
                        type='checkbox'
                        checked={showFastDelivery}
                        className='filter-input-check'
                     />
                     Fast Delivery
                  </div>
               </div>
            </div>
         </aside>

         <div className='filter-sm'>
            <div
               onClick={() => {
                  showSort(false) || showFilter(false);
               }}
               className={
                  sort || filter ? 'filter-overlay active' : 'filter-overlay'
               }></div>
            <div className='filter-buttons'>
               <button onClick={handleSort} className='filter-btn'>
                  <i className='fas fa-sort'></i> Sort
               </button>
               <button onClick={handleFilter} className='filter-btn'>
                  <i className='fas fa-filter'></i> Filter
               </button>
            </div>
            <div className='filter-sm-menu'>
               <div
                  className={sort ? 'filter-sm-sort active' : 'filter-sm-sort'}>
                  <p className='filter-sm-menu-title'>
                     Sort By
                     <span onClick={handleSort}>
                        <i className='fas fa-times'></i>
                     </span>
                  </p>
                  <div className='filter-input-sm'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                        }
                        name='sort-sm'
                        type='radio'
                        defaultChecked={sortBy && sortBy === 'LOW_TO_HIGH'}
                        className='filter-input-radio'
                     />
                     Price - Low to High
                  </div>
                  <div className='filter-input-sm'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
                        }
                        name='sort-sm'
                        type='radio'
                        defaultChecked={sortBy && sortBy === 'HIGH_TO_LOW'}
                        className='filter-input-radio'
                     />
                     Price - High to Low
                  </div>
               </div>

               <div
                  className={
                     filter ? 'filter-sm-filter active' : 'filter-sm-filter'
                  }>
                  <div className='filter-sm-heading-box'>
                     <div className='filter-sm-menu-box'>
                        <div className='filter-sm-menu-title'>Filters</div>
                        <button
                           className='btn btn-secondary btn-clear'
                           onClick={handleReset}>
                           Clear All
                        </button>
                     </div>
                     <div>
                        <span onClick={handleFilter}>
                           <i className='fas fa-times'></i>
                        </span>
                     </div>
                  </div>
                  <div className='filter-sm-box'>
                     <div className='filter-sm-box-title'>Categories</div>
                     {categories.map((category) => {
                        return (
                           <div className='filter-input-sm'>
                              <input
                                 onChange={() => handleCategory(category)}
                                 checked={state.categories.includes(category)}
                                 name='filter-sm'
                                 type='checkbox'
                                 className='filter-input-check'
                              />
                              {category}
                           </div>
                        );
                     })}
                  </div>

                  <div className='filter-sm-box'>
                     <div className='filter-sm-box-title'>Ratings</div>
                     {ratings.map((rating) => {
                        return (
                           <div className='filter-input-sm'>
                              <input
                                 onChange={() => handleRating(rating)}
                                 checked={state.ratings.includes(rating)}
                                 name='filter-sm'
                                 type='checkbox'
                                 className='filter-input-check'
                              />
                              {rating} ★
                           </div>
                        );
                     })}
                  </div>

                  <div className='filter-sm-box'>
                     <div className='filter-sm-box-title'>Other</div>
                     <div className='filter-input-sm'>
                        <input
                           onClick={() =>
                              dispatch({ type: 'TOGGLE_INVENTORY' })
                           }
                           name='filter-sm'
                           type='checkbox'
                           defaultChecked={showInventory}
                           className='filter-input-check'
                        />
                        Inlcude Out of Stock
                     </div>
                     <div className='filter-input-sm'>
                        <input
                           onClick={() => dispatch({ type: 'TOGGLE_DELIVERY' })}
                           name='filter-sm'
                           type='checkbox'
                           defaultChecked={showFastDelivery}
                           className='filter-input-check'
                        />
                        Fast Delivery
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
