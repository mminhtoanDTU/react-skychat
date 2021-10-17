import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ModalFriends from '../../components/ModalFriends';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Infobar from './components/Infobar';


function ChatApp(props) {
    const history = useHistory();
    const { isLogin } = useSelector(state => state.user);

    useEffect(() => {
        if (!isLogin) {
            history.push('/login');
        }
    }, [isLogin, history])

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