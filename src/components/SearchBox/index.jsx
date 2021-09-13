import React, { useRef, useState } from 'react';
import { IoCloseCircle, IoSearch } from 'react-icons/io5';
import './searchbox.scss';

function SearchBox(props) {
    const { placeholder, className, onSubmit } = props;
    const [valueSearch, setValueSearch] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleOnValueChange = (e) => {
        const value = e.target.value;
        setValueSearch(value);
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            onSubmit(value);
        }, 800);
    }

    const handleResetSearch = () => {
        setValueSearch('');
        onSubmit('');
    }

    return (
        <div className={`search-box ${className ? className : ''}`}>
            <input
                type="text"
                value={valueSearch}
                onChange={handleOnValueChange}
                className="search-box__input"
                placeholder={placeholder}
            />
            {valueSearch === '' ? (
                <IoSearch className="search-box__icon" />
            ) : (
                <IoCloseCircle
                    className="search-box__icon close"
                    onClick={() => handleResetSearch()}
                />
            )}
        </div>
    );
}

export default SearchBox;