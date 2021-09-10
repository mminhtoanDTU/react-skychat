import React, { useEffect, useRef } from 'react';
import { auth } from '../../../../../firebase/configFirebase';
import './popsetting.scss';
import { useDispatch } from 'react-redux'
import { logoutRemoveUser } from '../../../../../app/UserSlice'

function PopSetting({ setOpenSetting }) {
    const dispatch = useDispatch();
    const popSettingRef = useRef(null);

    const handleLogout = () => {
        const action = logoutRemoveUser();
        auth.signOut();
        dispatch(action);
    }

    return (
        <div ref={popSettingRef} className="pop-setting">
            <p
                className="pop-setting__item"
                onClick={() => console.log("Edit profile")}
            >
                Edit profile
            </p>
            <p
                className="pop-setting__item"
                onClick={() => handleLogout()}
            >
                Logout
            </p>
        </div>
    );
}

export default PopSetting;