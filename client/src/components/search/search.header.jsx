import React from 'react'
import SearchButtons from './search.buttons'
import SearchForm from './search.form'

const SearchHeader = () => { 
    return (
        <header>
            <nav className='row'>
                <SearchButtons.Home />
                <SearchButtons.Back />
                <SearchForm />
                <SearchButtons.Clear/>
            </nav>
        </header>
    )
 }

 export default SearchHeader