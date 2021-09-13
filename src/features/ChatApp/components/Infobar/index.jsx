import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleInfoBar } from '../../../../app/ControlSlice';
import { Avatar, Alert } from '../../../../components';
import './infobar.scss';

function SubContent(props) {
    const [isAlert, setIsAlert] = useState(false);
    const dispatch = useDispatch();
    const { selectedRoom } = useSelector(state => state.rooms);
    const { isShowInfoBar } = useSelector(state => state.control);


    const handleCloseInfoBarOnMobile = () => {
        dispatch(toggleInfoBar(false));
    }

    const handleOpenLink = () => {
        setIsAlert(true);
        const setTime = setTimeout(() => {
            setIsAlert(false);
        }, 2000)

        return () => clearTimeout(setTime);
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
                <a
                    className="link"
                    onClick={() => handleOpenLink()}
                >
                    View profile
                </a>
                {isAlert && <Alert message="Please try again later." type="info" />}
            </div>
            <span className="copyright">
                Copyright © 2021
                <a
                    href="https://toandev.tk/"
                    target="_blank"> toandev.tk</a>
            </span>
        </div>
    );
}

export default SubContent;