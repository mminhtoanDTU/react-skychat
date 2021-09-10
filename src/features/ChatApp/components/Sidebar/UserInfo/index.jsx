import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IoSettingsSharp } from 'react-icons/io5';
import PopSetting from '../PopSetting';

UserInfo.propTypes = {

};

function UserInfo(props) {
    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const { children } = props;
    const settingBtnRef = useRef(null);

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
        if (settingBtnRef.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setIsOpenSetting(false);
    }

    return (
        <div className="side-bar__info">
            {children}
            <div
                ref={settingBtnRef}
                className="icon"
                onClick={() => handleToggleSetting()}
            >
                <IoSettingsSharp />
                {isOpenSetting && <PopSetting setOpenSetting={setIsOpenSetting} />}
            </div>
        </div>
    );
}

export default UserInfo;