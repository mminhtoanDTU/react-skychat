import React, { useRef, useState } from 'react';
import { IoHappy, IoPaperPlane } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { addDocument } from '../../../../../firebase/service';
import { EmojiButton } from '@joeattardi/emoji-button';
import './inputmessage.scss';

function InputMessage(props) {
    const [message, setMessage] = useState('');
    const { userInfo } = useSelector(state => state.user);
    const { selectedRoom } = useSelector(state => state.rooms);

    const inputRef = useRef(null);

    const picker = new EmojiButton({
        position: {
            right: '20px',
            bottom: '60px'
        },
        autoHide: false,
        showPreview: false,
        showSearch: false,
        showVariants: false
    });

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

    const handleOpenEmoji = () => {
        console.log(inputRef.current);
        picker.on('emoji', selection => {
            // handle the selected emoji here
            const newMessage = message.concat(selection.emoji)
            setMessage(newMessage)
        });
        picker.togglePicker(inputRef.current)
    }

    return (
        <form className="box-input" onSubmit={(e) => handleOnSubmit(e)}>
            <input
                ref={inputRef}
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
                onClick={() => handleOpenEmoji()}
            >
                <IoHappy
                    size="22px"
                />
            </div>
        </form>
    );
}

export default InputMessage;