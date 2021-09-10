import React from 'react';
import PropTypes from 'prop-types';
import './itemfriend.scss';
import Avatar from '../../Avatar';
import Button from '../../Button';
import { useSelector } from 'react-redux';

ItemFriend.propTypes = {
    user: PropTypes.object,
};

function ItemFriend(props) {
    const { user, onAddClick, onChatClick } = props;
    const { userInfo } = useSelector(state => state.user);

    return (
        <li className="item-friend">
            <Avatar
                src={user.photoURL}
                size={50}
                alt="avatar"
                className="item-friend__avatar"
            />
            <span
                className="item-friend__name"
            >
                {user.displayName}
            </span>
            {!userInfo.friendIds.includes(user.uid) ? (
                <Button
                    name="Add Friend"
                    type="primary"
                    className="item-friend__add"
                    onClick={onAddClick}
                />
            ) : (
                <Button
                    name="Message"
                    type="outline"
                    className="item-friend__add"
                    onClick={onChatClick}
                />
            )}
        </li>
    );
}

export default ItemFriend;