import React, { useState } from 'react';

function SearchBar({ onSearch }){
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(input.trim()) onSearch(input);
        setInput('');
    };

return (
    <form onSubmit = {handleSubmit} className = "barra-busca">
        <input
        type = "text"
        value = {input}
        onChange = {(e) => setInput(e.target.value)}
        placeholder = "Type the name of the city..."
        />
        <button type = "submit">Search</button>
    </form>
);
}

export default SearchBar;