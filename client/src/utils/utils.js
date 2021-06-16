export const checkItem = (arr, product) => {
   return arr.filter((item) => item.id === product.id);
};

export const API_ENDPOINT = 'https://driftkart-backend-1.duhbhavesh.repl.co';
