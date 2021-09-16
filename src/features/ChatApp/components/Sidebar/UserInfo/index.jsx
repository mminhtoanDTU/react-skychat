import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from '../../../../../components';
import PopSetting from '../PopSetting';
import './userinfo.scss';

function UserInfo(props) {
    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const { userInfo } = props;
    const userBtnRef = useRef(null);

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

            {isOpenSetting && <PopSetting setOpenSetting={setIsOpenSetting} />}
        </div>
    );
}

export default UserInfo;