import React, { useEffect, useRef, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from '../../../app/UserSlice';
import { Avatar } from '../../../components';
import { Avatars } from '../../../Data/Avatars';
import SelectItem from './SelectItem';

SelectField.propTypes = {

};

function SelectField(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { userInfo } = useSelector(state => state.user);
    const btnRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mouseup', handleClickOutSide)
        } else {
            document.removeEventListener('mouseup', handleClickOutSide)
        }

        return () => document.removeEventListener('mouseup', handleClickOutSide);
    }, [isOpen])

    const handleClickOutSide = (e) => {
        if (btnRef.current.contains(e.target)) {
            return;
        }
        setIsOpen(false);
    }

    const handleTogglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectAvatar = (imageUrl) => {
        dispatch(setAvatar(imageUrl))
    }

    return (
        <div className="login-select">
            <span className="login-label">
                Avatar
            </span>
            <div className="login-select__avatar" ref={btnRef}>
                <Avatar
                    src={userInfo.photoURL}
                    size={100}
                    className="avatar"
                />
                <MdModeEdit
                    className="icon-edit"
                    onClick={(e) => handleTogglePopup(e)}
                />
                {isOpen && (
                    <ul className="pop-avatar">
                        {Avatars.map(item => (
                            <SelectItem
                                key={item}
                                imageUrl={item}
                                handleSelect={handleSelectAvatar}
                                currentAvatar={userInfo.photoURL}
                            />
                        ))}
                    </ul>)}
            </div>
        </div>
    );
}

export default SelectField;