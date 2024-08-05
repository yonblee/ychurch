import React from "react";
import SearchHeader from "@components/search/search.header";
import SearchResults from "@components/search/search.results";
import SearchSuggestions from "@components/search/search.suggestions";

const SearchPage = React.memo(() => {
    return (
        <>
            <SearchHeader />
            <div className="grid no-margin padding">
                <section className="s8 s8">
                    <SearchResults />
                </section>
                <section className="s4 s4">
                    <SearchSuggestions />
                </section>
            </div>
        </>
    )
},[])

export default SearchPage