import { AddToCartButton } from '../Buttons/AddToCartButton';
import { WishListButton } from '../Buttons/WishlistButton';
import './ProductDetail.css';

export const ProductDetail = ({ product }) => {
   return (
      <>
         <div className='product-detail'>
            <div className='product-photo'>
               <img className='product-img' src={product.image} alt='' />
            </div>
            <div className='product-info'>
               <h5 className='product-title'>{product.name}</h5>
               <h4 className='product-price'>
                  ₹{product.price.toLocaleString()}
               </h4>
               <p className='product-brand'>
                  <span className='product-info-label'>Brand: </span>
                  {product.brand}
               </p>
               <p className='product-description'>
                  <span className='product-info-label'>Description: </span>
                  {product.description}
               </p>
               <p className='product-rating'>
                  <span className='product-info-label'>Rating: </span>
                  <span>
                     <i className='fas fa-star'></i>
                  </span>
                  <strong> {product.rating}.0</strong>/5.0
               </p>
               <p className='product-stock'>
                  <span className='product-info-label'>Availibility:</span>
                  {product.inStock === true ? ' In Stock' : ' Out of Stock'}
               </p>
               <div className='product-actions'>
                  <AddToCartButton key={product.id} product={product} />
                  <WishListButton key={product.id} product={product} />
               </div>
            </div>
         </div>
      </>
   );
};
