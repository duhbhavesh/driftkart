import { DataReducer } from '../DataReducer';

describe('Testing Data Reducer Cart Operations', () => {
   test('Fetch Products', () => {
      const action = {
         type: 'SET_USER_CART',
         payload: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      };

      const initialState = {
         cart: [],
      };

      const state = DataReducer(initialState, action);

      expect(state).toEqual({
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      });
   });

   test('Add product to cart', () => {
      const action = {
         type: 'ADD_CART_ITEM',
         payload: {
            id: '124',
            product: {
               name: 'Action Camera',
               brand: 'GoPro',
               image: 'http://example.com/image.jpg',
               price: 123,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Action Camera',
            },
            quantity: 1,
         },
      };

      const initialState = {
         cart: [],
      };

      const state = DataReducer(initialState, action);

      expect(state).toEqual({
         cart: [
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      });
   });

   test('Remove product from cart', () => {
      const action = {
         type: 'REMOVE_CART_ITEM',
         payload: {
            id: '124',
            product: {
               name: 'Action Camera',
               brand: 'GoPro',
               image: 'http://example.com/image.jpg',
               price: 123,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Action Camera',
            },
            quantity: 1,
         },
      };

      const initialState = {
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      };

      const state = DataReducer(initialState, action);

      expect(state).toEqual({
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
         ],
      });
   });

   test('Increase product quantity', () => {
      let action = {
         type: 'INCREASE_QUANTITY',
         payload: {
            id: '123',
            product: {
               name: 'Camera',
               brand: 'Canon',
               image: 'http://example.com/image.jpg',
               price: 12,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Camera',
            },
            quantity: 1,
         },
      };

      let initialState = {
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
         ],
      };

      let state = DataReducer(initialState, action);

      expect(state).toEqual({
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 2,
            },
         ],
      });

      action = {
         type: 'INCREASE_QUANTITY',
         payload: {
            id: '124',
            product: {
               name: 'Action Camera',
               brand: 'GoPro',
               image: 'http://example.com/image.jpg',
               price: 123,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Action Camera',
            },
            quantity: 1,
         },
      };

      initialState = {
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 2,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      };

      state = DataReducer(initialState, action);

      expect(state).toEqual({
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 2,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 2,
            },
         ],
      });
   });

   test('Decrease product quantity', () => {
      let action = {
         type: 'DECREASE_QUANTITY',
         payload: {
            id: '123',
            product: {
               name: 'Camera',
               brand: 'Canon',
               image: 'http://example.com/image.jpg',
               price: 12,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Camera',
            },
            quantity: 2,
         },
      };

      let initialState = {
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 2,
            },
         ],
      };

      let state = DataReducer(initialState, action);

      expect(state).toEqual({
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
         ],
      });

      action = {
         type: 'DECREASE_QUANTITY',
         payload: {
            id: '124',
            product: {
               name: 'Action Camera',
               brand: 'GoPro',
               image: 'http://example.com/image.jpg',
               price: 123,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Action Camera',
            },
            quantity: 2,
         },
      };

      initialState = {
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 2,
            },
         ],
      };

      state = DataReducer(initialState, action);

      expect(state).toEqual({
         cart: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      });
   });
});

describe('Testing Data Reducer Wishlist Operations', () => {
   test('Add product to wishlist', () => {
      const action = {
         type: 'ADD_WISHLIST_ITEM',
         payload: {
            id: '124',
            product: {
               name: 'Action Camera',
               brand: 'GoPro',
               image: 'http://example.com/image.jpg',
               price: 123,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Action Camera',
            },
            quantity: 1,
         },
      };

      const initialState = {
         wishList: [],
      };

      const state = DataReducer(initialState, action);

      expect(state).toEqual({
         wishList: [
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      });
   });

   test('Remove product from wishlist', () => {
      const action = {
         type: 'REMOVE_WISHLIST_ITEM',
         payload: {
            id: '124',
            product: {
               name: 'Action Camera',
               brand: 'GoPro',
               image: 'http://example.com/image.jpg',
               price: 123,
               description: 'Testing Data',
               inStock: true,
               fastDelivery: false,
               rating: 1,
               category: 'Action Camera',
            },
            quantity: 1,
         },
      };

      const initialState = {
         wishList: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
            {
               id: '124',
               product: {
                  name: 'Action Camera',
                  brand: 'GoPro',
                  image: 'http://example.com/image.jpg',
                  price: 123,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Action Camera',
               },
               quantity: 1,
            },
         ],
      };

      const state = DataReducer(initialState, action);

      expect(state).toEqual({
         wishList: [
            {
               id: '123',
               product: {
                  name: 'Camera',
                  brand: 'Canon',
                  image: 'http://example.com/image.jpg',
                  price: 12,
                  description: 'Testing Data',
                  inStock: true,
                  fastDelivery: false,
                  rating: 1,
                  category: 'Camera',
               },
               quantity: 1,
            },
         ],
      });
   });
});
