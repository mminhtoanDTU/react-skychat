import React, { useState } from 'react';
import { IoHappy, IoPaperPlane } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { addDocument } from '../../../../../firebase/service';
import './inputmessage.scss';

function InputMessage(props) {
    const [message, setMessage] = useState('');
    const { userInfo } = useSelector(state => state.user);
    const { selectedRoom } = useSelector(state => state.rooms);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (message !== '') {
            addDocument("messages", {
                sender: userInfo.uid,
                roomId: selectedRoom.roomId,
                // members: [userInfo.uid, selectedRoom.uid],
                message: message,
            })
        }
        setMessage('');
    }
    return (
        <form className="box-input" onSubmit={(e) => handleOnSubmit(e)}>
            <input
                type="text"
                className="input-message"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <div
                className="btn-send"
                onClick={(e) => handleOnSubmit(e)}
            >
                <IoPaperPlane size="23px" />
            </div>
            <div className="icon-smile">
                <IoHappy size="22px" />
            </div>
        </form>
    );
}

export default InputMessage;