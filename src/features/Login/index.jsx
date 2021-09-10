import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase, { auth } from '../../firebase/configFirebase';
import { addDocument } from '../../firebase/service';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import './login.scss';

function Login(props) {

    const history = useHistory();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleLoginGoogle = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(googleProvider);
        //If is new user, add to database
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
    }

    auth.onAuthStateChanged(user => {
        if (user) {
            history.push('/chat')
        }
    })

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <div className="login-wrap">
                <div
                    className="login__btn"
                    onClick={() => handleLoginGoogle()}
                >
                    <FcGoogle className="icon" />
                    <span>Sign in with Google</span>
                </div>
                <div
                    className="login__btn"
                    onClick={() => handleLoginGoogle()}
                >
                    <FaFacebookSquare className="icon facebook" />
                    <span>Sign in with Facebook</span>
                </div>
            </div>
        </div>
    );
}

export default Login;