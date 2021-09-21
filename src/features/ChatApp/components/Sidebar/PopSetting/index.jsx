import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { resetControl } from '../../../../../app/ControlSlice';
import { resetRooms } from '../../../../../app/RoomSlice';
import { logoutUser, resetUser } from '../../../../../app/UserSlice';
import { Avatar } from '../../../../../components';
import { clearLocalStore, setLocalStorage } from '../../../../../services';
import './popsetting.scss';

function PopSetting() {
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        clearLocalStore('userInfo');
        clearLocalStore('friendIds');
        clearLocalStore('rooms');
        setLocalStorage('isLogin', false);
        sessionStorage.clear();
        dispatch(resetUser());
        dispatch(resetRooms());
        dispatch(resetControl());
        dispatch(logoutUser(false));
    }

    return (
        <div className="pop-setting">
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