import React, { useState } from 'react';

function SearchBar({ onSearch }){
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents the page of reload, default for forms
        if(input.trim()) onSearch(input); //do the search only if someone typed something
        setInput(''); //clear the bar after the search
    };

    return (
        <form onSubmit = {handleSubmit} className = "search-bar">
            <input
            type = "text"
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
            placeholder = "Type the name of the city..."
            />
            <button type = "submit">Search</button>
        </form>
    ); //returning the page
}

export default SearchBar;