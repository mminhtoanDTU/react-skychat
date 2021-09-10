import React from 'react';
import PropTypes from 'prop-types';

Avatar.propTypes = {

};

function Avatar(props) {
    const { src, alt, size, className } = props;

    const avatarStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,
        overflow: `hidden`
    }
    return (
        <>
            <img
                className={className}
                src={src}
                alt={alt}
                style={avatarStyle} />
        </>
    );
}

export default Avatar;