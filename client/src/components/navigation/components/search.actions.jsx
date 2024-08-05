import React from 'react'
import { Search20Regular } from "@fluentui/react-icons";
import { useNavigate } from 'react-router-dom';

const SearchActions = React.memo(()=>{
    const goto = useNavigate()
    const handleClick = () => { goto("/search") }

    return (
        <button onClick={handleClick} class="circle transparent">
            <i className="extra"><Search20Regular /></i>
        </button>
    )
},[])

export default SearchActions