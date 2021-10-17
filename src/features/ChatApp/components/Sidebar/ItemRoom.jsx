import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../components/Avatar';
import moment from 'moment';
import { useSelector } from 'react-redux';

ItemRoom.propTypes = {
    room: PropTypes.object,
    onClick: PropTypes.func,
};

function ItemRoom(props) {
    const { room, onClick, currentRoomId } = props;

    const convertTime = (time) => {
        if (time) {
            return moment(time).format('LT');
        }
    }

    return (
        <div
            className={`item-room ${currentRoomId === room.uid ? 'active' : ''}`}
            onClick={() => onClick(room)}
        >
            <Avatar
                src={room.photoURL}
                alt={room.displayName}
                size={50}
            />
            <span className="name">{room.displayName}</span>
            <span className="time">{convertTime(room.updatedAt)}</span>
        </div>
    );
}

export default ItemRoom;