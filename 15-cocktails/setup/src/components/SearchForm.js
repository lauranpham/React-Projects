import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');
  
  // on iniital, it will focus on the search value ref
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  // prevent reload of application on submit/pressing enter
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // call setSearchTerm when search value is changed therefore triggering an updated cocktails list
  const searchCocktails = () =>{
    setSearchTerm(searchValue.current.value)
    // must get current.value when using useRef
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktails} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
