import { Link } from 'react-router-dom';
import { RemoveWishlistButton } from '../Buttons/RemoveWishListButton';
import { MoveToCartButton } from '../Buttons/MoveToCartButton';
import './WishListItem.css';

export const WishListItem = ({ product }) => {
   return (
      <div className='wishlist-card product product-card'>
         <RemoveWishlistButton key={product.id} product={product} />
         <div className='product-image'>
            <img className='card-img' src={product?.image} alt='' />
         </div>
         <div className='product-details'>
            <h3 className='product-heading'>
               <Link to='#' id='product-title'>
                  {product?.name}
               </Link>
            </h3>
            <div className='product-price'>
               <p className='new-price'>
                  ₹{product?.price}
                  <span className='old-price'>₹ {product?.price}</span>
               </p>
            </div>
         </div>
         <div className='product-details'>
            <div className='rating'>
               <span>
                  <i className='fas fa-star'></i>
               </span>
               <span>
                  <strong>4.5</strong>/5.0
               </span>
            </div>
            <div className='cart'>
               <MoveToCartButton key={product.id} product={product} />
            </div>
         </div>
      </div>
   );
};
