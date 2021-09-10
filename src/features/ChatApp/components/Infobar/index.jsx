import React from 'react';
import { Link } from 'react-router-dom';
import './infobar.scss';

function SubContent(props) {
    return (
        <div className="info-bar">
            <div className="info-bar__top">
                <h3 className="title">
                    Friend Profile
                </h3>
            </div>
            <div className="info-bar__content">
                <div className="avatar">
                    <img
                        src="https://source.unsplash.com/random"
                        alt="avatar"
                    />
                </div>
                <span className="name">Park Chaeyoung</span>
                <Link
                    to="/profile"
                    className="link"
                >
                    View profile
                </Link>
            </div>
            <span className="copyright">
                Copyright © 2021
                <a
                    href="https://toandev.tk/"
                    target="_blank"> toandev.tk</a>
            </span>
        </div>
    );
}

export default SubContent;