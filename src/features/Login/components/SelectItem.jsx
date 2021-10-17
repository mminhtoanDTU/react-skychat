import React from 'react';
import { GoCheck } from 'react-icons/go';

function SelectItem({ handleSelect, currentAvatar, imageUrl }) {

    return (
        <li
            className={`pop-item ${currentAvatar === imageUrl ? 'active' : ''}`}
        >
            <img
                onClick={() => handleSelect(imageUrl)}
                src={imageUrl}
                alt="pop-image"
                className="pop-img"
            />
            {currentAvatar === imageUrl && <GoCheck className="icon-check" />}
        </li>
    );
}

export default SelectItem;