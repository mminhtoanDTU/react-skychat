import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleContentMessage, toggleLoading, toggleModalFriends } from '../../../../app/ControlSlice';
import { setRoomInfo } from '../../../../app/RoomSlice';
import Logo from '../../../../assets/images/logo-icon.png';
import { Button, Loading, SearchBox } from '../../../../components';
import { AppContext } from '../../../../contexts/AppProvider';
import FormatString from '../../../../Logic/FormatString';
import ItemRoom from './ItemRoom';
import './sidebar.scss';
import UserInfo from './UserInfo';


function Sidebar(props) {
    const [listFriendRooms, setListFriendRooms] = useState([]);
    const [listCurrentRooms, setListCurrentRooms] = useState([]);
    const [filter, setFilter] = useState('');
    const { userInfo, isLogin } = useSelector(state => state.user);
    const { isLoading } = useSelector(state => state.control)
    const { rooms, allUsers } = useContext(AppContext);
    const dispatch = useDispatch();

    useEffect(() => {
        function CustomListRoom() {
            const customList = rooms.map(room => {
                const findFriendId = room.members.find(memId => memId !== userInfo.uid);
                const infoFriend = allUsers.find(user => user.uid === findFriendId);

                return ({
                    displayName: infoFriend.displayName,
                    roomId: room.id,
                    uid: infoFriend.uid,
                    photoURL: infoFriend.photoURL,
                    updatedAt: room.updatedAt
                });
            })
            setListFriendRooms(customList);
        }
        CustomListRoom();
    }, [rooms, allUsers])

    useEffect(() => {
        dispatch(toggleLoading(true));
        const currentList = listFriendRooms.filter(room => {
            if (filter === '') {
                return room
            } else {
                return FormatString(room.displayName).includes(filter);
            }
        });

        const setWait = setTimeout(() => {
            dispatch(toggleLoading(false));
        }, 500)
        setListCurrentRooms(currentList);
        return () => clearTimeout(setWait);

    }, [listFriendRooms, filter]);

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
                <Link to="/" className="logo">
                    <img src={Logo} alt="Logo Sky Chat" />
                    <span>Sky Chat</span>
                </Link>
                {isLogin && <UserInfo userInfo={userInfo} />}
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
                    onClick={() => handleOpenModalFriends()}
                    name="New"
                    icon={<AiOutlinePlus />}
                    type="blur"
                />
            </div>
            <div className="side-bar__list">
                {!isLogin ? (
                    <Loading />
                ) : listFriendRooms.length === 0 ? (
                    <p className="sub-text">
                        List is empty.
                        <span onClick={() => handleOpenModalFriends()}> Add new</span>
                    </p>
                ) : isLoading ? (
                    <Loading />
                ) : (
                    listCurrentRooms.length ? (
                        listCurrentRooms.map(room => (
                            <ItemRoom
                                key={room.id}
                                room={room}
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