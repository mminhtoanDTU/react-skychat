import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FieldInput(props) {
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);

    const handleCheckValid = () => {
        if (value === '') {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }

    return (
        <div className="login-input">
            <span className="login-label">
                Name*
            </span>
            <input
                name='skyname'
                type="text"
                className={`input ${isError ? 'error' : ''}`}
                placeholder="What is your name?"
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => handleCheckValid()}
                required
            />
            <p className={`feedback-input ${isError ? 'error' : ''}`}>
                *Please enter your name.
            </p>
        </div>
    );
}

export default FieldInput;