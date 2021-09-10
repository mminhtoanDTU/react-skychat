import React from 'react';
import PropTypes from 'prop-types';
import './inputmessage.scss';
import { IoHappy, IoPaperPlane } from 'react-icons/io5';


InputMessage.propTypes = {

};

function InputMessage(props) {
    return (
        <div className="box-input">
            <input
                type="text"
                className="input-message"
                placeholder="Type a message"
            />
            <div className="btn-send">
                <IoPaperPlane size="23px" />
            </div>
            <div className="icon-smile">
                <IoHappy size="22px" />
            </div>
        </div>
    );
}

export default InputMessage;