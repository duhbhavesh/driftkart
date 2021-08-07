import { Link } from 'react-router-dom';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import { WishlistButtonIcon } from '../Buttons/WishlistButtonIcon';
import './ProductItem.css';

export const ProductItem = ({ product }) => {
   return (
      <>
         <div className='card product product-card'>
            <WishlistButtonIcon product={product} />
            <div className='product-image'>
               <img className='card-img' src={product.image} alt='' />
            </div>
            <div className='product-details'>
               <h3 className='product-heading'>
                  <Link to={`/product/${product.id}`} id='product-title'>
                     {product.name}
                  </Link>
               </h3>
               <div className='rating'>
                  <span>
                     <i className='fas fa-star'></i>
                  </span>
                  <span>
                     <strong>{product.rating}.0</strong>/5.0
                  </span>
               </div>
            </div>
            <div className='product-details'>
               <div className='product-price'>
                  <p className='new-price'>
                     ₹{product.price.toLocaleString()}
                     <span className='old-price'>
                        ₹ {product.price.toLocaleString()}
                     </span>
                  </p>
               </div>
               <div className='cart'>
                  <AddToCartButton key={product.id} product={product} />
               </div>
            </div>
         </div>
      </>
   );
};
