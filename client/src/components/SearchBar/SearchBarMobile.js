export const SideBarMobile = ({ searchInput, setSearchInput, navigate }) => {
   const handleSearch = (e) => {
      e.preventDefault();
      if (searchInput !== '') {
         navigate(`/search?query=${searchInput}`);
      }
   };

   return (
      <>
         <form className='form-inline'>
            <input
               className='input-box form-control'
               type='search'
               placeholder='Search for products...'
               aria-label='Search'
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
               onClick={(e) => handleSearch(e)}
               className='btn btn-search'
               type='submit'>
               <i className='fas fa-search'></i>
            </button>
         </form>
      </>
   );
};
