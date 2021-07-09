export const checkItem = (itemArray, id) => {
   if (itemArray) {
      return itemArray.find((item) => item.product.id === id);
   }
   return false;
};

export const API_ENDPOINT = 'https://driftkart-backend-1.duhbhavesh.repl.co';
