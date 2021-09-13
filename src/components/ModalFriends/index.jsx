import React, { useContext, useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SearchBox from '../SearchBox';
import ItemFriend from './ItemFriend';
import './modalfriends.scss';
import { toggleContentMessage, toggleLoading, toggleModalFriends } from '../../app/ControlSlice';
import { AppContext } from '../../contexts/AppProvider';
import { addNewFriends } from '../../app/UserSlice';
import { addDocument, updateDocument } from '../../firebase/service';
import firebase from '../../firebase/configFirebase';
import { setRoomInfo } from '../../app/RoomSlice';
import { Loading } from '..';
import FormatString from '../../Logic/FormatString'


function ModalFriends(props) {
    const [listFriends, setListFriends] = useState([]);
    const [filter, setFilter] = useState({
        type: 'all',
        key: '',
    });
    const dispatch = useDispatch();
    const { isModalFriends, isLoading } = useSelector(state => state.control)
    const { userInfo } = useSelector(state => state.user);
    const { allUsers, rooms } = useContext(AppContext);

    useEffect(() => {
        dispatch(toggleLoading(true));
        const customList = allUsers.filter(user => {
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
    }, [allUsers, filter]);

    //Close modal
    const handleOnModalFriends = () => {
        dispatch(toggleModalFriends(false))
    }

    const handleAddFriend = (friendId) => {
        const action = addNewFriends(friendId);
        dispatch(action);

        updateDocument("users", userInfo.docId, {
            friendIds: firebase.firestore.FieldValue.arrayUnion(friendId)
        })

        const FriendDocId = allUsers.find(friend => friend.uid === friendId);
        updateDocument("users", FriendDocId.id, {
            friendIds: firebase.firestore.FieldValue.arrayUnion(userInfo.uid)
        })
    }

    //Create room
    const handleChatRoom = (friendInfo) => {
        const currentRoom = rooms.find(room => room.members.includes(friendInfo.uid));

        //When create new room, wait get roomId then add to redux
        if (!currentRoom) {
            const getRoomId = addDocument("rooms", {
                members: [friendInfo.uid, userInfo.uid],
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            getRoomId.then(result => {
                const newRoomInfo = {
                    displayName: friendInfo.displayName,
                    roomId: result,
                    uid: friendInfo.uid,
                    photoURL: friendInfo.photoURL
                }
                dispatch(setRoomInfo(newRoomInfo));
            })
            dispatch(toggleModalFriends(false))
            return;
        }

        const newRoomInfo = {
            displayName: friendInfo.displayName,
            roomId: currentRoom.id,
            uid: friendInfo.uid,
            photoURL: friendInfo.photoURL
        }
        dispatch(setRoomInfo(newRoomInfo));
        dispatch(toggleModalFriends(false));
        dispatch(toggleContentMessage(true))
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
            <SearchBox
                placeholder="Search"
                onSubmit={handleGetValueSearch}
            />
            <div className="modal-friends__top">
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

                <div
                    className="icon"
                    onClick={() => handleOnModalFriends()}
                >
                    <IoArrowBack />
                </div>
            </div>

            <ul className="modal-friends__list">
                {isLoading ? (
                    <Loading />
                ) : (listFriends.length) ? (
                    listFriends.map((user) => (
                        <ItemFriend
                            key={user.uid}
                            user={user}
                            onAddClick={() => handleAddFriend(user.uid)}
                            onChatClick={() => handleChatRoom(user)}
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