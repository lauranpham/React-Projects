import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');
  
  // call setSearchTerm when search value is changed therefore triggering an updated cocktails list
  const searchCocktails = () =>{
    setSearchTerm(searchValue.current.value)
    // must get current.value when using useRef
  }
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktails} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
