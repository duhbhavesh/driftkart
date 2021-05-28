export const Signup = () => {
   return (
      <>
         <div className='container'>
            <div className='container-login'>
               <div className='card-login'>
                  <h3 className='title-login'>Sign up</h3>
                  <div class='input-group'>
                     <label class='input-label' for='input-name'>
                        First Name
                     </label>
                     <input
                        class='input-box'
                        id='input-name'
                        type='text'
                        placeholder='First Name'
                     />
                  </div>
                  <div class='input-group'>
                     <label class='input-label' for='input-name'>
                        Last Name
                     </label>
                     <input
                        class='input-box'
                        id='input-name'
                        type='text'
                        placeholder='Last Name'
                     />
                  </div>
                  <div class='input-group'>
                     <label class='input-label' for='input-email'>
                        E-mail
                     </label>
                     <input
                        class='input-box'
                        id='input-email'
                        type='email'
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
                  <button className='btn btn-primary btn-login'>Sign up</button>
               </div>
            </div>
         </div>
      </>
   );
};
