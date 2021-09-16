import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'outline', 'default', 'blur']),
    name: PropTypes.string,
    icon: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.string,
};

function Button(props) {
    const { name, icon, type,
        className, size, onClick, useRef, isSubmit } = props;


    return (
        <button
            type={isSubmit ? 'submit' : ''}
            ref={useRef}
            className={`btn ${`btn-${type}`}${size ? ` btn-${size} ` : ' '}${className ? className : ''}`}
            onClick={onClick ? (uid) => onClick(uid) : () => { }}
        >
            {icon && <span className="icon">
                {icon}
            </span>}
            <span className="name">{name}</span>
        </button>
    );
}

export default Button;