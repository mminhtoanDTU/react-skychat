import React from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

Alert.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOfType([
        'success', 'danger', 'warning', 'info'
    ]),
    style: PropTypes.string,
};

function Alert(props) {
    const { message, type, style } = props;

    return (
        <div className={`alert alert-${type} ${style ? style : ''}`} role="alert">
            {message}
        </div>
    );
}

export default Alert;