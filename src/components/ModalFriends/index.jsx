import React, { useContext, useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SearchBox from '../SearchBox';
import ItemFriend from './ItemFriend';
import './modalfriends.scss';
import { closeModalFriends } from '../../app/ControlSlice';
import { AppContext } from '../../contexts/AppProvider';
import { addNewFriends } from '../../app/UserSlice';
import { addDocument, updateDocument } from '../../firebase/service';
import firebase from '../../firebase/configFirebase';
import { setRoomInfo } from '../../app/RoomSlice';
import { useHistory } from 'react-router';


function ModalFriends(props) {
    const [currentRoom, setCurrentRoom] = useState();
    const dispatch = useDispatch();
    const { isModalFriends } = useSelector(state => state.control)
    const { userInfo } = useSelector(state => state.user);
    const { allUsers, rooms } = useContext(AppContext);

    const handleOnModalFriends = () => {
        dispatch(closeModalFriends())
    }

    useEffect(() => {

    }, [rooms])

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

    const handleChatRoom = (friendInfo) => {
        const currentRoom = rooms.find(room => room.members.includes(friendInfo.uid));
        if (!currentRoom) {
            addDocument("rooms", {
                members: [friendInfo.uid, userInfo.uid],
            });
            return;
        }

        const newRoomInfo = {
            displayName: friendInfo.displayName,
            roomId: currentRoom.id,
            uid: friendInfo.uid,
            photoURL: friendInfo.photoURL
        }
        dispatch(setRoomInfo(newRoomInfo));
        dispatch(closeModalFriends())
    }

    return (
        <div className={`modal-friends ${isModalFriends ? 'active' : ''}`}>
            <div className="modal-friends__top">
                <h3 className="title">All Users</h3>
                <div
                    className="icon"
                    onClick={() => handleOnModalFriends()}
                >
                    <IoArrowBack />
                </div>
            </div>
            <SearchBox placeholder="Search" />
            <ul className="modal-friends__list">
                {allUsers.map((user) => (
                    <ItemFriend
                        key={user.uid}
                        user={user}
                        onAddClick={() => handleAddFriend(user.uid)}
                        onChatClick={() => handleChatRoom(user)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ModalFriends;