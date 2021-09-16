import React, { useEffect } from 'react';
import { MainContent, Sidebar, Infobar } from './components';
import './chatapp.scss';
import ModalFriends from '../../components/ModalFriends';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function ChatApp(props) {
    const history = useHistory();
    const { isLogin } = useSelector(state => state.user);

    useEffect(() => {
        if (!isLogin) {
            history.push('/login');
        }
    }, [isLogin])

    return (
        <>
            <div className="app-wrapper">
                <Sidebar />
                <MainContent />
                <Infobar />

            </div>
            {isLogin && <ModalFriends />}
        </>
    );
}

export default ChatApp;