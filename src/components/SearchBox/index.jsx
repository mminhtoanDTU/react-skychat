import React from 'react';
import { IoSearch } from 'react-icons/io5';
import './searchbox.scss';

function SearchBox(props) {
    const { placeholder } = props;
    return (
        <div className="search-box">
            <input
                type="text"
                className="search-box__input"
                placeholder={placeholder}
            />
            <IoSearch className="search-box__icon" />
        </div>
    );
}

export default SearchBox;