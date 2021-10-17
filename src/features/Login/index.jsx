import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginSetUser } from '../../app/UserSlice';
import Intro from '../../assets/images/intro-welcome.svg';
import { Button, Loading } from '../../components';
import { setLocalStorage } from '../../services';
import InputField from './components/InputField';
import SelectField from './components/SelectField';

function Login(props) {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const { userInfo, isLogin } = useSelector(state => state.user);

    useEffect(() => {
        if (isLogin) {
            history.push('/chat');
        }
    }, [isLogin, history])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        setTimeout(() => {
            dispatch(loginSetUser(formProps.skyname));
            setLocalStorage('userInfo', {
                displayName: formProps.skyname,
                photoURL: userInfo.photoURL,
                uid: 'sky00'
            });
            setLocalStorage('isLogin', true);
            setIsLoading(false);
        }, 2500)
    }

    return (
        <div className="login">
            <div className="login-intro" style={{ backgroundImage: `url(${Intro})` }} />
            <div className="login-content">
                <h3 className="content-title">Login</h3>
                <p className="content-subtitle">
                    Hi there! <span>Welcome to Sky Chat.</span>
                </p>
                <form
                    className="login-content__form"
                    onSubmit={handleOnSubmit}
                >
                    <SelectField />
                    <InputField />
                    <Button
                        isSubmit
                        name="Login"
                        type="primary"
                        size="large"
                        className="login-btn"
                    />
                </form>
                <span className="copyright login-copyright">
                    Copyright © 2021
                    <a
                        href="https://toandev.tk/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        toandev.tk
                    </a>
                </span>
                {isLoading && (<div className="wrap-loading">
                    <Loading />
                </div>)}
            </div>
        </div>
    );
}

export default Login;