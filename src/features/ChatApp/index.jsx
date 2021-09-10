import React from 'react';
import { MainContent, Sidebar, Infobar, Header } from './components';
import './chatapp.scss';
import ModalFriends from '../../components/ModalFriends';

function ChatApp(props) {
    return (
        <>
            <div className="app-wrapper">
                <Sidebar />
                <MainContent />
                <Infobar />
            </div>
            <ModalFriends />
        </>
    );
}

export default ChatApp;