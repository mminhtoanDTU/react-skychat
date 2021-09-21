import React from 'react';
import PropTypes from 'prop-types';
import UserPlace from '../../assets/images/user-place.png';

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string,
};

Avatar.defaultProps = {
    src: '',
    size: 20,
}

function Avatar(props) {
    const { src, alt, size, className } = props;

    const avatarStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,
        overflow: `hidden`,
        border: '1px solid #eee',
        flexShrink: 0,
    }
    return (
        <>
            <img
                className={className}
                onError={(e) => { e.target.onerror = null; e.target.src = UserPlace }}
                src={src}
                alt={alt}
                style={avatarStyle}
            />
        </>
    );
}

export default Avatar;