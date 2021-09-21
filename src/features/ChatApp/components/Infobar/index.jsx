import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInfoBar } from '../../../../app/ControlSlice';
import { Avatar } from '../../../../components';
import './infobar.scss';

function SubContent(props) {
    const dispatch = useDispatch();
    const { selectedRoom } = useSelector(state => state.rooms);
    const { isShowInfoBar } = useSelector(state => state.control);


    const handleCloseInfoBarOnMobile = () => {
        dispatch(toggleInfoBar(false));
    }

    return (
        <div className={`info-bar ${isShowInfoBar ? 'active' : ''}`}>
            <div className="info-bar__top">
                <IoArrowBack
                    className="icon-back"
                    onClick={() => handleCloseInfoBarOnMobile()}
                />
                <h3 className="title">
                    Friend Profile
                </h3>
            </div>
            <div className="info-bar__content">
                <Avatar
                    src={selectedRoom.photoURL}
                    alt={selectedRoom.displayName}
                    size={150}
                />
                <span className="name">{selectedRoom.displayName}</span>
                <span
                    className="link"
                >
                    View profile
                </span>
            </div>
            <span className="copyright">
                Copyright © 2021
                <a
                    href="https://toandev.tk/"
                    target="_blank"> toandev.tk</a>
            </span>
            <div
                className={`hidden-click ${isShowInfoBar ? 'active' : ''}`}
                onClick={() => handleCloseInfoBarOnMobile()}
            >
            </div>
        </div>
    );
}

export default SubContent;