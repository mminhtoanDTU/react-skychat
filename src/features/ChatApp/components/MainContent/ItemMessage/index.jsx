import React from 'react';
import PropTypes from 'prop-types';
import './itemmessage.scss'
ItemMessage.propTypes = {
    message: PropTypes.string,
    time: PropTypes.string,
    isSend: PropTypes.bool,
};

function ItemMessage(props) {
    const { message, time, isSend } = props;
    return (
        <div className={`item-message ${isSend && 'sender'}`}>
            <span className="msg">{message}</span>
            <div className="times">{time}</div>
        </div>
    );
}

export default ItemMessage;