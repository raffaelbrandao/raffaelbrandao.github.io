import React from 'react';
import './Header.css';
import LanguageMenu from './LanguageMenu/LanguageMenu';
import Welcome from './Welcome/Welcome';

function Header() {
    return (
        <header>
            <LanguageMenu />
            <Welcome />
        </header>
    );
}

export default Header;