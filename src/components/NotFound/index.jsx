import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div style={{ textAlign: 'center', paddingTop: '30px', lineHeight: '1.5' }}>
            Sorry Page Not Found 😥
            <Link to="/chat" style={{ display: 'block', color: 'blueviolet' }}>Back home</Link>
        </div>
    );
}

export default NotFound;