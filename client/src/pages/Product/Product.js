import { useParams } from 'react-router';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { useData } from '../../context/DataContext';
import { getSortedData, getFilteredData } from '../../components/Filter/Filter';

export const Product = () => {
   const { state } = useData();
   const { products, sortBy, showInventory, showFastDelivery } = state;
   const { id } = useParams();

   const sortedData = getSortedData(products, sortBy);
   const filteredData = getFilteredData(sortedData, {
      showInventory,
      showFastDelivery,
   });

   const product = filteredData.find((item) => item.id === id);

   return <>{product ? <ProductDetail product={product} /> : <div></div>}</>;
};
