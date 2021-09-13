import React, { useEffect } from 'react';
import { MainContent, Sidebar, Infobar, Header } from './components';
import './chatapp.scss';
import ModalFriends from '../../components/ModalFriends';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { auth } from '../../firebase/configFirebase';

function ChatApp(props) {
    const history = useHistory();
    const { isLoading, isLogin } = useSelector(state => state.user);

    useEffect(() => {
        const unsubscibed = auth.onAuthStateChanged(async user => {
            if (!user) {
                history.push('/login')
            }
        });

        return () => unsubscibed();
    }, [])

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