import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from '../../../components';
import PopAvatar from './PopAvatar';
import { MdModeEdit } from 'react-icons/md'
import { useSelector } from 'react-redux';

FieldAvatar.propTypes = {

};

function FieldAvatar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { userInfo } = useSelector(state => state.user);
    const btnRef = useRef(null);

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
                {isOpen && <PopAvatar />}
            </div>
        </div>
    );
}

export default FieldAvatar;