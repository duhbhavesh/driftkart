import { useState } from 'react';
import { useData } from '../../context/DataContext';

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

export const Filter = () => {
   const { state, dispatch } = useData();
   const { sortBy, showInventory, showFastDelivery } = state;
   const [sort, showSort] = useState(false);
   const [filter, showFilter] = useState(false);

   const handleSort = () => showSort(!sort);
   const handleFilter = () => showFilter(!filter);

   return (
      <>
         <aside className='filter-md'>
            <fieldset className='filter'>
               <legend>Sort</legend>
               <label>
                  <input
                     onClick={() =>
                        dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                     }
                     name='sort'
                     type='radio'
                     checked={sortBy && sortBy === 'LOW_TO_HIGH'}
                     className='filter-input'
                  />
                  Low to High
               </label>
               <label>
                  <input
                     onClick={() =>
                        dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
                     }
                     name='sort'
                     type='radio'
                     checked={sortBy && sortBy === 'HIGH_TO_LOW'}
                     className='filter-input'
                  />
                  High to Low
               </label>
            </fieldset>

            <fieldset className='filter'>
               <legend>Filter</legend>
               <label>
                  <input
                     onClick={() => dispatch({ type: 'TOGGLE_INVENTORY' })}
                     name='filter'
                     type='checkbox'
                     checked={showInventory}
                     className='filter-input'
                  />
                  Inlcude Out of Stock
               </label>
               <label>
                  <input
                     onClick={() => dispatch({ type: 'TOGGLE_DELIVERY' })}
                     name='filter'
                     type='checkbox'
                     checked={showFastDelivery}
                     className='filter-input'
                  />
                  Fast Delivery
               </label>
            </fieldset>
         </aside>

         <div className='filter-sm'>
            <div className='filter-buttons'>
               <button onClick={handleSort} className='filter-btn'>
                  Sort
               </button>
               <button onClick={handleFilter} className='filter-btn'>
                  Filter
               </button>
            </div>
            <div className='filter-sm-menu'>
               <div
                  className={sort ? 'filter-sm-sort active' : 'filter-sm-sort'}>
                  <h4 className='filter-sm-menu-title'>
                     Sort <span onClick={handleSort}>X</span>
                  </h4>
                  <label>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                        }
                        name='sort'
                        type='radio'
                        checked={sortBy && sortBy === 'LOW_TO_HIGH'}
                        className='filter-input'
                     />
                     Low to High
                  </label>
                  <label>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
                        }
                        name='sort'
                        type='radio'
                        checked={sortBy && sortBy === 'HIGH_TO_LOW'}
                        className='filter-input'
                     />
                     High to Low
                  </label>
               </div>

               <div
                  className={
                     filter ? 'filter-sm-filter active' : 'filter-sm-filter'
                  }>
                  <h4 className='filter-sm-menu-title'>
                     Filter <span onClick={handleFilter}>X</span>
                  </h4>
                  <label>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_INVENTORY' })}
                        name='filter'
                        type='checkbox'
                        checked={showInventory}
                        className='filter-input'
                     />
                     Inlcude Out of Stock
                  </label>
                  <label>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_DELIVERY' })}
                        name='filter'
                        type='checkbox'
                        checked={showFastDelivery}
                        className='filter-input'
                     />
                     Fast Delivery
                  </label>
               </div>
            </div>
         </div>
      </>
   );
};
