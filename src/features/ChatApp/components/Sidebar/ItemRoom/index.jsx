import React from 'react';
import PropTypes from 'prop-types';
import './itemroom.scss';
import Avatar from '../../../../../components/Avatar';
import moment from 'moment';
import { useSelector } from 'react-redux';

ItemRoom.propTypes = {

};

function ItemRoom(props) {
    const { room, onClick } = props;
    const { selectedRoom } = useSelector(state => state.rooms);

    const convertTime = (time) => {
        if (time?.seconds) {
            return moment(time.seconds * 1000).format('LT');
        }
    }

    return (
        <div
            className={`item-room ${selectedRoom.roomId === room.roomId ? 'active' : ''}`}
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