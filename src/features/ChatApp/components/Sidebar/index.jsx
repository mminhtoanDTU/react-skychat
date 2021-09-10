import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/logo-icon.png';
import SearchBox from '../../../../components/SearchBox';
import ItemRoom from './ItemRoom';
import './sidebar.scss';
import UserInfo from './UserInfo';
import { openModalFriends } from '../../../../app/ControlSlice';
import Button from '../../../../components/Button';
import { AppContext } from '../../../../contexts/AppProvider';
import { setRoomInfo } from '../../../../app/RoomSlice';
import Avatar from '../../../../components/Avatar';

function Sidebar(props) {
    const [listFriendRooms, setListFriendRooms] = useState([]);
    const { userInfo, isLoading, isLogin } = useSelector(state => state.user);
    const { rooms, allUsers } = useContext(AppContext);
    const dispatch = useDispatch();

    useEffect(() => {
        const customList = rooms.map(room => {
            const findFriendId = room.members.find(memId => memId !== userInfo.uid);
            const infoFriend = allUsers.find(user => user.uid === findFriendId);

            return ({
                displayName: infoFriend.displayName,
                roomId: room.id,
                uid: infoFriend.uid,
                photoURL: infoFriend.photoURL,
            })
        })
        setListFriendRooms(customList);
    }, [rooms, allUsers])

    const handleOpenModalFriends = () => {
        dispatch(openModalFriends());
    }

    const handleSelectedRoom = (room) => {
        dispatch(setRoomInfo(room));
    }

    if (!isLogin) {
        return (
            <div className="side-bar">
                <Link to="/" className="side-bar__logo">
                    <img src={Logo} alt="Logo Sky Chat" />
                    <span>Sky Chat</span>
                </Link>
                <h4 >Welcome to Sky Chat</h4>
                <Link to="/login">
                    <Button name="Login" type="primary" />
                </Link>
            </div>
        )
    }
    return (
        <div className="side-bar">
            <Link to="/" className="side-bar__logo">
                <img src={Logo} alt="Logo Sky Chat" />
                <span>Sky Chat</span>
            </Link>

            <UserInfo>
                <Avatar
                    src={userInfo.photoURL}
                    alt={userInfo.displayName}
                    size={50}
                />
                <h4 className="name">
                    {`Hi, ${userInfo.displayName}`}
                </h4>
            </UserInfo>
            <SearchBox placeholder="Search" />
            <div className="side-bar__add">
                <h5 className="text">
                    Last chats
                </h5>
                <div
                    className="icon"
                    onClick={() => handleOpenModalFriends()}
                >
                    <AiOutlinePlus />
                </div>
            </div>
            <div className="side-bar__list">
                {listFriendRooms.map(room => (
                    <ItemRoom
                        key={room.id}
                        room={room}
                        onClick={handleSelectedRoom}
                    />
                ))}

            </div>
        </div>
    );
}

export default Sidebar;