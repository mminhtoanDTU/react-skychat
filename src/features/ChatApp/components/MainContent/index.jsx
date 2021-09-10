import React from 'react';
import './maincontent.scss';
import { IoCall, IoEllipsisHorizontal } from 'react-icons/io5';
import ItemMessage from './ItemMessage';
import InputMessage from './InputMessage';
import { useSelector } from 'react-redux';
import Avatar from '../../../../components/Avatar';


function MainContent(props) {
    const { selectedRoom } = useSelector(state => state.rooms);

    return (
        <div className="main-content">
            <div className="main-content__head">
                <div className="user-info">
                    <Avatar
                        src={selectedRoom.photoURL}
                        alt={selectedRoom.displayName}
                        size={50}
                    />
                    <h4 className="name">
                        {selectedRoom.displayName}
                    </h4>
                </div>
                <div className="tools">
                    <div className="wrap-icon">
                        <IoCall size="30px" />
                    </div>
                    <div className="wrap-icon">
                        <IoEllipsisHorizontal size="30px" />
                    </div>
                </div>
            </div>
            <div className="main-content__body">
                <div className="message-wrap">
                    <div className="message-wrap__list">
                        <ItemMessage
                            message="Xin chao !"
                            time="11:30"
                            isSend={false}
                        />
                        <ItemMessage
                            message="Xin chao 2  !"
                            time="11:30"
                            isSend={false}
                        />
                        <ItemMessage
                            message="Xin chao 3  !"
                            time="11:30"
                            isSend={true}
                        />
                        <ItemMessage
                            message="Xin chao  4!"
                            time="11:30"
                            isSend={true}
                        />
                        <ItemMessage
                            message="Xin chao 5 !"
                            time="11:30"
                            isSend={false}
                        />

                    </div>
                </div>
                <InputMessage />
            </div>
        </div>
    );
}

export default MainContent;