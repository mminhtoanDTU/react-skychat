import React from 'react';
import { GoCheck } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAvatar } from '../../../../app/UserSlice';

function PopItem({ active, image, onClick }) {
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSelectAvatar = (image) => {
        dispatch(setAvatar(image))
    }

    return (
        <li
            className={`pop-item ${userInfo.photoURL === image ? 'active' : ''}`}
        >
            <img
                onClick={() => handleSelectAvatar(image)}
                src={image}
                alt="pop-image"
                className="pop-img"
            />
            {userInfo.photoURL === image && <GoCheck className="icon-check" />}
        </li>
    );
}

export default PopItem;