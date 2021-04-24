import { Toaster } from 'react-hot-toast';

export const Toast = () => {
   return (
      <Toaster
         position='bottom-right'
         reverseOrder={false}
         toastOptions={{
            success: {
               iconTheme: {
                  primary: '#059669',
               },
            },
            error: {
               iconTheme: {
                  primary: '#ff4d4f',
               },
            },
         }}
      />
   );
};
