import React, { useContext } from 'react';
import './welcome.scss';
import IntroImage from '../../../../../assets/images/intro-welcome.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading, toggleModalFriends } from '../../../../../app/ControlSlice';

function Welcome(props) {
    const dispatch = useDispatch();
    const { isModalFriends } = useSelector(state => state.control);
    const rooms = []

    const handleOpenModalFriends = () => {
        if (!isModalFriends) {
            dispatch(toggleModalFriends(true));
            dispatch(toggleLoading(true));

            setTimeout(() => {
                dispatch(toggleLoading(false));
            }, 1000);
        }
    }

    return (
        <div className="main-content">
            <div className="welcome-wrap">
                <div className="welcome__content">
                    <h4 className="title">
                        {!rooms.length ? "Welcome to Sky Chat" : "Welcome back!"}
                    </h4>
                    <p className="sub-title">
                        {!rooms.length ? "Sky Chat makes it easy and fun to stay close to your favorite people." : "So glad you're back 😍"}
                    </p>
                    {!rooms.length ? (
                        <div
                            className="btn-action"
                            onClick={() => handleOpenModalFriends()}
                        >
                            Create a room
                        </div>
                    ) : (
                        <p className="text-action">Let's send a message to your friends.</p>
                    )}
                </div>
                <div
                    className="welcome__cover"
                    style={{ backgroundImage: `url(${IntroImage})` }}
                >
                </div>
            </div>
        </div>
    )
}

export default Welcome;