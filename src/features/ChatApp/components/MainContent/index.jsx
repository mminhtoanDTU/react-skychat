import React, { useEffect, useRef } from 'react';
import { IoArrowBack, IoCall, IoEllipsisHorizontal } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleContentMessage, toggleInfoBar } from '../../../../app/ControlSlice';
import { replyChange } from '../../../../app/RoomSlice';
import Avatar from '../../../../components/Avatar';
import { MessagesScript } from '../../../../Data/Messages';
import { setSessionStorage } from '../../../../services';
import ContentBody from './ContentBody';
import InputMessage from './InputMessage';
import Welcome from './Welcome';

function randomIndex(prev) {
    const random = Math.round(Math.random() * MessagesScript.length - 1);
    if (random === prev) {
        randomIndex(prev);
    }
    return random;
}

function MainContent(props) {
    const dispatch = useDispatch();
    const { selectedRoom, hasSender, hasReply } = useSelector(state => state.rooms);
    const { isShowInfoBar, isShowMessage } = useSelector(state => state.control);
    const ScriptDownRef = useRef();

    //Message reply autoscript
    useEffect(() => {
        if (Object.keys(selectedRoom).length !== 0) {
            if (ScriptDownRef.current) {
                clearTimeout(ScriptDownRef.current);
            }

            ScriptDownRef.current = setTimeout(() => {
                setSessionStorage('messages', {
                    roomId: selectedRoom.uid,
                    message: MessagesScript[hasReply],
                    time: new Date(),
                    sender: selectedRoom.uid
                });
                dispatch(replyChange(randomIndex(hasReply)));
            }, 3000)
        }

        return () => clearTimeout(ScriptDownRef.current);
    }, [hasSender, dispatch]);

    const handleOnInfobar = () => {
        dispatch(toggleInfoBar(!isShowInfoBar));
    }

    const handleCloseMessageOnMobile = () => {
        dispatch(toggleContentMessage(false));
    }

    if (Object.keys(selectedRoom).length === 0) {
        return (
            <Welcome />
        )
    }
    return (
        <div className={`main-content ${isShowMessage ? 'active' : ''}`}>
            <div className="main-content__head">
                <IoArrowBack
                    className="icon-back"
                    onClick={handleCloseMessageOnMobile}
                />
                <div className="main-info">
                    <Avatar
                        src={selectedRoom.photoURL}
                        alt={selectedRoom.displayName}
                        size={40}
                    />
                    <h4 className="name">
                        {selectedRoom.displayName}
                    </h4>
                </div>
                <div className="tools">
                    <div className="wrap-icon">
                        <IoCall size="30px" />
                    </div>
                    <div
                        className={`wrap-icon ${isShowInfoBar ? 'active' : ''}`}
                        onClick={handleOnInfobar}
                    >
                        <IoEllipsisHorizontal size="30px" />
                    </div>
                </div>
            </div>
            <div className="main-content__body">
                <ContentBody />
                <InputMessage />
            </div>
        </div>
    );
}

export default MainContent;