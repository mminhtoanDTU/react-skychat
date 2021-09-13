import React, { useEffect, useRef } from 'react';
import { auth } from '../../../../../firebase/configFirebase';
import './popsetting.scss';
import { useDispatch } from 'react-redux'
import { logoutRemoveUser } from '../../../../../app/UserSlice'
import { setRoomInfo } from '../../../../../app/RoomSlice';
import { useSelector } from 'react-redux';
import { Avatar } from '../../../../../components';
import { FiLogOut } from 'react-icons/fi'

function PopSetting() {
    const { userInfo } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const popSettingRef = useRef(null);

    const handleLogout = () => {
        auth.signOut();
        dispatch(logoutRemoveUser());
        dispatch(setRoomInfo({}))
    }

    return (
        <div ref={popSettingRef} className="pop-setting">
            <div
                className="pop-setting__item"
                onClick={() => console.log("Edit profile")}
            >
                <Avatar src={userInfo.photoURL} size={28} />
                <span>{userInfo.displayName}</span>
            </div>

            <div
                className="pop-setting__item"
                onClick={() => handleLogout()}
            >
                <FiLogOut className="icon" />
                <span>Logout</span>
            </div>
        </div>
    );
}

export default PopSetting;