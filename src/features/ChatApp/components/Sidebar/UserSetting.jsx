import React, { useEffect, useRef, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { resetControl } from '../../../../app/ControlSlice';
import { resetRooms } from '../../../../app/RoomSlice';
import { logoutUser, resetUser } from '../../../../app/UserSlice';
import { Avatar } from '../../../../components';
import { clearLocalStore, setLocalStorage } from '../../../../services';




function UserInfo(props) {
    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const { userInfo } = props;
    const userBtnRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpenSetting) {
            document.addEventListener("mouseup", handleClickOutside);
        } else {
            document.removeEventListener("mouseup", handleClickOutside)
        }

        return () => document.removeEventListener("mouseup", handleClickOutside);
    }, [isOpenSetting]);

    const handleToggleSetting = () => {
        setIsOpenSetting(!isOpenSetting)
    }

    const handleClickOutside = (e) => {
        if (userBtnRef.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setIsOpenSetting(false);
    }

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
        <div
            className="user-info"
            ref={userBtnRef}
            onClick={(e) => handleToggleSetting(e)}
        >
            <Avatar
                src={userInfo.photoURL}
                alt={userInfo.displayName}
                size={40}
            />
            {isOpenSetting && (
                <div className="pop-setting">
                    <div
                        className="pop-setting__item"
                    >
                        <Avatar src={userInfo.photoURL} size={28} />
                        <span>{userInfo.displayName}</span>
                    </div>

                    <div
                        className="pop-setting__item"
                        onClick={handleLogout}
                    >
                        <FiLogOut className="icon" />
                        <span>Logout</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserInfo;