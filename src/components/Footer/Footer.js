import React from 'react';
import './Footer.css';
import Copyright from './Copyright/Copyright';

function Footer() {
    return (
        <footer>
            <div className="container">
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;