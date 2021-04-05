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
   return (
      <>
         <fieldset>
            <legend>Sort</legend>
            <label>
               <input
                  onClick={() =>
                     dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' })
                  }
                  name='sort'
                  type='radio'
                  checked={sortBy && sortBy === 'LOW_TO_HIGH'}
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
               />
               High to Low
            </label>
         </fieldset>

         <fieldset>
            <legend>Filter</legend>
            <label>
               <input
                  onClick={() => dispatch({ type: 'TOGGLE_INVENTORY' })}
                  name='filter'
                  type='checkbox'
                  checked={showInventory}
               />
               Inlcude Out of Stock
            </label>
            <label>
               <input
                  onClick={() => dispatch({ type: 'TOGGLE_DELIVERY' })}
                  name='filter'
                  type='checkbox'
                  checked={showFastDelivery}
               />
               Fast Delivery
            </label>
         </fieldset>
      </>
   );
};
