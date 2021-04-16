import { fi } from 'faker/lib/locales';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import './Filter.css';

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
            <div className='filter'>
               <p className='filter-title'>Sort By</p>
               <div className='filter-inputs'>
                  <div className='filter-input'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                        }
                        name='sort'
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
                        name='sort'
                        type='radio'
                        checked={sortBy && sortBy === 'HIGH_TO_LOW'}
                        className='filter-input-radio'
                     />
                     Price - High to Low
                  </div>
               </div>
            </div>

            <div className='filter'>
               <p className='filter-title'>Filter</p>
               <div className='filter-inputs'>
                  <div className='filter-input'>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_INVENTORY' })}
                        name='filter'
                        type='checkbox'
                        checked={showInventory}
                        className='filter-input-check'
                     />
                     Inlcude Out of Stock
                  </div>
                  <div className='filter-input'>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_DELIVERY' })}
                        name='filter'
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
                  <i class='fas fa-sort'></i> Sort
               </button>
               <button onClick={handleFilter} className='filter-btn'>
                  <i class='fas fa-filter'></i> Filter
               </button>
            </div>
            <div className='filter-sm-menu'>
               <div
                  className={sort ? 'filter-sm-sort active' : 'filter-sm-sort'}>
                  <p className='filter-sm-menu-title'>
                     Sort By
                     <span onClick={handleSort}>
                        <i class='fas fa-times'></i>
                     </span>
                  </p>
                  <div className='filter-input-sm'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                        }
                        name='sort'
                        type='radio'
                        checked={sortBy && sortBy === 'LOW_TO_HIGH'}
                        className='filter-input-radio'
                     />
                     Price - Low to High
                  </div>
                  <div className='filter-input-sm'>
                     <input
                        onClick={() =>
                           dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' })
                        }
                        name='sort'
                        type='radio'
                        checked={sortBy && sortBy === 'HIGH_TO_LOW'}
                        className='filter-input-radio'
                     />
                     Price - High to Low
                  </div>
               </div>

               <div
                  className={
                     filter ? 'filter-sm-filter active' : 'filter-sm-filter'
                  }>
                  <p className='filter-sm-menu-title'>
                     Filter
                     <span onClick={handleFilter}>
                        <i class='fas fa-times'></i>
                     </span>
                  </p>
                  <div className='filter-input-sm'>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_INVENTORY' })}
                        name='filter'
                        type='checkbox'
                        checked={showInventory}
                        className='filter-input-check'
                     />
                     Inlcude Out of Stock
                  </div>
                  <div className='filter-input-sm'>
                     <input
                        onClick={() => dispatch({ type: 'TOGGLE_DELIVERY' })}
                        name='filter'
                        type='checkbox'
                        checked={showFastDelivery}
                        className='filter-input-check'
                     />
                     Fast Delivery
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
