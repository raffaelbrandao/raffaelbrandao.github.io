import React from 'react';
import './Footer.css';
import LanguageMenu from './LanguageMenu/LanguageMenu';
import Copyright from './Copyright/Copyright';

function Footer() {
    return (
        <footer>
            <div className="container">
                <LanguageMenu />
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;