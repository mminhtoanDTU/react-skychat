import React from 'react';
import PropTypes from 'prop-types';
import './itemroom.scss';
import Avatar from '../../../../../components/Avatar';

ItemRoom.propTypes = {

};

function ItemRoom(props) {
    const { room, onClick } = props;

    return (
        <div
            className="item-room"
            onClick={() => onClick(room)}
        >
            <Avatar
                src={room.photoURL}
                alt={room.displayName}
                size={50}
            />
            <span className="name">{room.displayName}</span>
            <span className="time">11:20</span>
        </div>
    );
}

export default ItemRoom;