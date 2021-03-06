import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleContentMessage, toggleLoading, toggleModalFriends } from '../../../../app/ControlSlice';
import { setRoomInfo } from '../../../../app/RoomSlice';
import Logo from '../../../../assets/images/logo-icon.png';
import { Button, Loading, SearchBox } from '../../../../components';
import FormatString from '../../../../Logic/FormatString';
import ItemRoom from './ItemRoom';
import UserSetting from './UserSetting';


function Sidebar(props) {
    const [listCurrentRooms, setListCurrentRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [filter, setFilter] = useState('');
    const { userInfo, isLogin } = useSelector(state => state.user);
    const { rooms, selectedRoom } = useSelector(state => state.rooms);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        const currentList = rooms.filter(room => {
            if (filter === '') {
                return room
            } else {
                return FormatString(room.displayName).includes(filter);
            }
        });

        const setWait = setTimeout(() => {
            setIsLoading(false);
        }, 500)
        setListCurrentRooms(currentList.reverse());
        return () => clearTimeout(setWait);
    }, [filter, rooms]);

    const handleOpenModalFriends = () => {
        dispatch(toggleModalFriends(true));
        dispatch(toggleLoading(true));
        setTimeout(() => {
            dispatch(toggleLoading(false));
        }, 1000)
    }

    const handleSelectedRoom = (room) => {
        dispatch(setRoomInfo(room));
        dispatch(toggleContentMessage(true));
    }

    const handleGetValueSearch = (formValue) => {
        setFilter(FormatString(formValue));
    }

    return (
        <div className="side-bar">
            <div className="side-bar__top">
                <Link to="/chat" className="logo">
                    <img src={Logo} alt="Logo Sky Chat" />
                    <span className="title">Sky Chat</span>
                </Link>
                {isLogin && <UserSetting userInfo={userInfo} />}
            </div>

            <SearchBox
                placeholder="Search"
                className="side-bar__search"
                onSubmit={handleGetValueSearch}
            />
            <div className="side-bar__add">
                <h5 className="text">
                    Messages
                </h5>
                <Button
                    onClick={handleOpenModalFriends}
                    name="New"
                    icon={<AiOutlinePlus />}
                    type="blur"
                />
            </div>
            <div className="side-bar__list">
                {!isLogin ? (
                    <Loading />
                ) : rooms.length === 0 ? (
                    <p className="sub-text">
                        List is empty.
                        <span onClick={handleOpenModalFriends}> Add new</span>
                    </p>
                ) : isLoading ? (
                    <Loading />
                ) : (
                    listCurrentRooms.length ? (
                        listCurrentRooms.map(room => (
                            <ItemRoom
                                key={room.uid}
                                room={room}
                                currentRoomId={selectedRoom.uid}
                                onClick={handleSelectedRoom}
                            />
                        ))
                    ) : (
                        <p className="not-match">Does not match any results!</p>
                    )
                )}
            </div>
        </div>
    );
}

export default Sidebar;