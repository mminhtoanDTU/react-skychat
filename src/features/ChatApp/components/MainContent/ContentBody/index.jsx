import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSessionStorage } from '../../../../../services';
import ItemMessage from '../ItemMessage';

function ContentBody(props) {
    const [messages, setMessages] = useState([]);
    const [loader, setLoader] = useState(false);
    const { selectedRoom, hasSender, hasReply } = useSelector(state => state.rooms);
    const { userInfo } = useSelector(state => state.user);
    const loaderRef = useRef(null);
    //download message
    useEffect(() => {
        const allMessages = getSessionStorage('messages') || [];
        const currentRoomMessage = allMessages.filter(mess => mess.roomId === selectedRoom.uid)
        setMessages(currentRoomMessage);
    }, [selectedRoom, hasSender, hasReply]);

    useEffect(() => {
        if (hasSender != '') {
            setLoader(true);

            if (loaderRef.current) {
                clearTimeout(loaderRef.current);
            }

            loaderRef.current = setTimeout(() => {
                setLoader(false);
            }, 3000)
        }
    }, [hasSender])

    const convertDate = (time) => {
        if (time) {
            return moment(time).calendar();
        }
    }

    return (
        <div className="message-wrap">
            <div className="message-wrap__list">
                {messages.map((mess, index) => (
                    <ItemMessage
                        key={index}
                        message={mess.message}
                        time={convertDate(mess.time)}
                        isSend={mess.sender === userInfo.uid}
                    />
                ))}
                <ItemMessage
                    isSend={false}
                    loading={loader}
                />
            </div>
        </div>
    );
}

export default ContentBody;