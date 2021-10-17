import React, { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loading } from '..';
import { toggleContentMessage, toggleLoading, toggleModalFriends } from '../../app/ControlSlice';
import { setRoomInfo, setRooms } from '../../app/RoomSlice';
import { addNewFriends } from '../../app/UserSlice';
import Logo from '../../assets/images/logo-icon.png';
import AllUsers from '../../Data/Users';
import FormatString from '../../Logic/FormatString';
import { getLocalStorage, setArrayLocalStorage } from '../../services';
import SearchBox from '../SearchBox';
import ItemFriend from './ItemFriend';



function ModalFriends(props) {
    const [listFriends, setListFriends] = useState([]);
    const [filter, setFilter] = useState({
        type: 'all',
        key: '',
    });
    const dispatch = useDispatch();
    const { isModalFriends, isLoading } = useSelector(state => state.control);
    const { userInfo } = useSelector(state => state.user);

    //Get list user all follow filter
    useEffect(() => {
        dispatch(toggleLoading(true));
        const customList = AllUsers.filter(user => {
            if (filter.type === 'all') {
                if (filter.key === '') {
                    return (user)
                } else {
                    return FormatString(user.displayName).includes(filter.key)
                }
            } else {
                if (userInfo.friendIds.includes(user.uid)) {
                    if (filter.key === '') {
                        return (user)
                    } else {
                        return FormatString(user.displayName).includes(filter.key)
                    }
                }
            }
        })
        const setWait = setTimeout(() => {
            dispatch(toggleLoading(false));
        }, 500)
        setListFriends(customList);

        return () => clearTimeout(setWait);
    }, [filter, dispatch]);

    //Close modal
    const handleOnModalFriends = () => {
        dispatch(toggleModalFriends(false))
    }

    const handleAddFriend = (friendId) => {
        const action = addNewFriends(friendId);
        dispatch(action);
        setArrayLocalStorage('friendIds', friendId);
    }

    //Create room
    const handleClickMessage = (friendInfo) => {
        const { uid, displayName, photoURL } = friendInfo;
        const Rooms = getLocalStorage('rooms') || [];
        const roomExist = Rooms.find(room => room.uid === uid);

        if (!roomExist) {
            setArrayLocalStorage('rooms', {
                uid: uid,
                displayName: displayName,
                photoURL: photoURL,
                updatedAt: new Date()
            });

            const newRoom = {
                displayName: displayName,
                uid: uid,
                photoURL: photoURL,
                updatedAt: new Date()
            }
            dispatch(setRooms(newRoom));
        }

        const infoCurrentRoom = {
            displayName: displayName,
            uid: uid,
            photoURL: photoURL,
        }

        dispatch(setRoomInfo(infoCurrentRoom));
        dispatch(toggleModalFriends(false));
        dispatch(toggleContentMessage(true));
    }

    const handleGetValueSearch = (result) => {
        setFilter({
            ...filter,
            key: FormatString(result)
        })
    }

    const handleSwitchFilter = (type) => {
        setFilter({
            ...filter,
            type: type
        })
    }

    return (
        <div className={`modal-friends ${isModalFriends ? 'active' : ''}`}>
            <div className="modal-friends__top">
                <Link to="/chat" className="logo modal-logo">
                    <img src={Logo} alt="Logo Sky Chat" />
                    <span className="title">Sky Chat</span>
                </Link>
                <div
                    className="icon"
                    onClick={handleOnModalFriends}
                >
                    <IoArrowBack />
                </div>
            </div>
            <SearchBox
                placeholder="Search"
                onSubmit={handleGetValueSearch}
            />
            <div className="modal-friends__category">
                <span
                    className={`option-item ${filter.type === 'all' ? 'active' : ''}`}
                    onClick={() => handleSwitchFilter('all')}
                >
                    All Users
                </span>
                <span
                    className={`option-item ${filter.type === 'friends' ? 'active' : ''}`}
                    onClick={() => handleSwitchFilter('friends')}
                >
                    Friends
                </span>


            </div>

            <ul className="modal-friends__list">
                {isLoading ? (
                    <Loading />
                ) : (listFriends.length) ? (
                    listFriends.map((user) => (
                        <ItemFriend
                            key={user.uid}
                            user={user}
                            onAddClick={handleAddFriend}
                            onChatClick={handleClickMessage}
                        />
                    ))
                ) : (
                    <p className="not-match">Does not match any results!</p>
                )}
            </ul>

        </div>
    );
}

export default ModalFriends;