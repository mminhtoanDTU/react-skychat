import React from 'react';
import PropTypes from 'prop-types';
import './itemmessage.scss'
ItemMessage.propTypes = {
    message: PropTypes.string,
    time: PropTypes.string,
    isSend: PropTypes.bool,
};

function ItemMessage(props) {
    const { message, time, isSend, loading } = props;
    return (
        <div className={`item-message ${isSend && 'sender'}`}>
            {message && <span className="msg">{message}</span>}
            {time && <div className="times">{time}</div>}
            {loading && (<span className="msg">
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
            </span>)}
        </div>
    );
}

export default ItemMessage;