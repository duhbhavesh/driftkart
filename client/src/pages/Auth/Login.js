import './Login.css';

export const Login = () => {
   return (
      <>
         <div className='container'>
            <div className='container-login'>
               <div className='card-login'>
                  <h3 className='title-login'>Log in</h3>
                  <div class='input-group'>
                     <label class='input-label' for='input-email'>
                        E-mail
                     </label>
                     <input
                        class='input-box'
                        id='input-email'
                        type='text'
                        placeholder='name@example.com'
                     />
                  </div>
                  <div class='input-group'>
                     <label class='input-label' for='input-password'>
                        Password
                     </label>
                     <input
                        class='input-box'
                        id='input-password'
                        type='password'
                        placeholder='Password'
                     />
                  </div>
                  <button className='btn btn-primary btn-login'>Log in </button>
               </div>
            </div>
         </div>
      </>
   );
};
