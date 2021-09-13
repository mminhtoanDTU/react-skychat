import React, { useEffect } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import Intro from '../../assets/images/intro-message.svg';
import firebase, { auth } from '../../firebase/configFirebase';
import { addDocument } from '../../firebase/service';
import './login.scss';

function Login(props) {
    const history = useHistory();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    //when the newbie, add to database
    useEffect(() => {
        const unsubscibed = auth.getRedirectResult().then(result => {
            const { additionalUserInfo, user } = result;
            if (additionalUserInfo?.isNewUser) {
                addDocument("users", {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    friendIds: [],
                    providerId: additionalUserInfo.providerId
                })
            }
        })

        return () => unsubscibed;
    }, [])

    //when logined redirect to chat
    useEffect(() => {
        const checkLogin = auth.onAuthStateChanged(user => {
            if (user) {
                history.push('/chat');
            }
        })

        return () => checkLogin;
    }, [])

    const handleLoginGoogle = () => {
        auth.signInWithRedirect(googleProvider);
    }

    return (
        <div className="login">
            <div className="login-intro" style={{ backgroundImage: `url(${Intro})` }}>

            </div>
            <div className="login-content">
                <h3 className="login-content__title">Sign In</h3>
                <p className="login-content__subtitle">
                    Hi there! <span>Welcome to Sky Chat.</span>
                </p>

                <div className="login-content__action">
                    <div
                        className="login-btn google"
                        onClick={() => handleLoginGoogle()}
                    >
                        <FcGoogle className="icon" />
                        <span className="text">Sign in with Google</span>
                    </div>
                    <p>Or</p>
                    <div
                        className="login-btn facebook"
                        onClick={() => handleLoginGoogle()}
                    >
                        <FaFacebookSquare className="icon facebook" />
                        <span className="text">Sign in with Facebook</span>
                    </div>
                </div>
                <span className="copyright login-copyright">
                    Copyright © 2021
                    <a
                        href="https://toandev.tk/"
                        target="_blank"> toandev.tk</a>
                </span>
            </div>

        </div>
    );
}

export default Login;