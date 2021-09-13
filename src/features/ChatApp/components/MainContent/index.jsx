import moment from 'moment';
import React, { useContext, useMemo, useState } from 'react';
import { IoArrowBack, IoCall, IoEllipsisHorizontal } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleContentMessage, toggleInfoBar } from '../../../../app/ControlSlice';
import Alert from '../../../../components/Alert';
import Avatar from '../../../../components/Avatar';
import { AppContext } from '../../../../contexts/AppProvider';
import useFirestore from '../../../../hooks/useFirestore';
import InputMessage from './InputMessage';
import ItemMessage from './ItemMessage';
import './maincontent.scss';
import Welcome from './Welcome';

function MainContent(props) {
    const dispatch = useDispatch();
    const { selectedRoom } = useSelector(state => state.rooms);
    const { userInfo, isLoading } = useSelector(state => state.user);
    const { isShowInfoBar, isShowMessage } = useSelector(state => state.control);
    const { rooms } = useContext(AppContext);


    //Get message form database
    const messageCondition = useMemo(() => {
        return {
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom.roomId,
        };
    }, [selectedRoom.roomId]);
    const messages = useFirestore("messages", messageCondition, { field: 'createdAt', isDesc: false });


    function convertDate(time) {
        if (time?.seconds) {
            return moment(new Date(time.seconds * 1000)).calendar();
        }
    }

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
                    onClick={() => handleCloseMessageOnMobile()}
                />
                <div className="user-info">
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
                        onClick={() => handleOnInfobar()}
                    >
                        <IoEllipsisHorizontal size="30px" />
                    </div>
                </div>
            </div>
            <div className="main-content__body">
                <div className="message-wrap">
                    <div className="message-wrap__list">
                        {messages.map((mess, index) => (
                            <ItemMessage
                                key={mess.createdAt}
                                message={mess.message}
                                time={convertDate(mess.createdAt)}
                                isSend={mess.sender === userInfo.uid}
                            />
                        ))}

                    </div>
                </div>
                <InputMessage />
            </div>
        </div>
    );
}

export default MainContent;