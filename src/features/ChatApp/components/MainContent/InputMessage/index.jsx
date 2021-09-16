import React, { useState } from 'react';
import { IoHappy, IoPaperPlane } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange } from '../../../../../app/RoomSlice';
import { setSessionStorage } from '../../../../../services';
import './inputmessage.scss';


function InputMessage(props) {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const { userInfo } = useSelector(state => state.user);
    const { selectedRoom } = useSelector(state => state.rooms);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (message !== '') {
            setSessionStorage('messages', {
                roomId: selectedRoom.uid,
                message: message,
                time: new Date(),
                sender: userInfo.uid
            });
            dispatch(inputChange(Math.random().toFixed(2)));
        }
        setMessage('');
    }

    return (
        <form
            className="box-input"
            onSubmit={(e) => handleOnSubmit(e)}>
            <input
                autoComplete="off"
                name="message"
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
            <div
                className="icon-smile"
                onClick={() => console.log("Open Emoji")}
            >
                <IoHappy size="22px" />
            </div>
        </form>
    );
}

export default InputMessage;