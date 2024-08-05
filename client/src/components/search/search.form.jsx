import React from 'react'
import { Search12Regular } from "@fluentui/react-icons";


const SearchForm = () => { 
    return (
            <form method="post" className="row no-space max">
                <div class="max field border left-round">
                    <input />
                </div>
                <button class="large right-round no-elevate">
                    <i><Search12Regular /></i>
                    {/* <span>Search</span> */}
                </button>
            </form>
           
    )
 }

 export default SearchForm