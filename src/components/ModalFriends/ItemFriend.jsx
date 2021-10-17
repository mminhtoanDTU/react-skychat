import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';
import Button from '../Button';

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
                    onClick={() => onAddClick(user.uid)}
                />
            ) : (
                <Button
                    name="Message"
                    type="outline"
                    className="item-friend__add"
                    onClick={() => onChatClick(user)}
                />
            )}
        </li>
    );
}

export default ItemFriend;