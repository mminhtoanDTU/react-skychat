import React from 'react';
import { GoCheck } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from '../../../../app/UserSlice';

function PopItem({ active, imageUrl, onClick }) {
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSelectAvatar = (imageUrl) => {
        dispatch(setAvatar(imageUrl))
    }

    return (
        <li
            className={`pop-item ${userInfo.photoURL === imageUrl ? 'active' : ''}`}
        >
            <img
                onClick={() => handleSelectAvatar(imageUrl)}
                src={imageUrl}
                alt="pop-imageUrl"
                className="pop-img"
            />
            {userInfo.photoURL === imageUrl && <GoCheck className="icon-check" />}
        </li>
    );
}

export default PopItem;