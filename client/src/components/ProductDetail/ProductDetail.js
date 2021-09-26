import { useNavigate } from 'react-router';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import './ProductDetail.css';

export const ProductDetail = ({ product }) => {
   const navigate = useNavigate();

   return (
      <>
         <div className='product-detail'>
            <div className='product-photo'>
               <img className='product-img' src={product.image} alt='' />
            </div>
            <div className='product-info'>
               <h4 className='product-title'>{product.name}</h4>
               <p className='product-brand'>Brand - {product.brand}</p>
               <p className='product-stock'>
                  {product.inStock === true ? 'In Stock' : 'Out of Stock'}
               </p>
               <div className='product-actions'>
                  <AddToCartButton key={product.id} product={product} />
                  <button
                     className='btn btn-secondary'
                     onClick={() => navigate(-1)}>
                     Go Back
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};
