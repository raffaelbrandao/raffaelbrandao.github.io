import React from 'react';
import './LanguageMenu.css';
import { useTranslation } from 'react-i18next';

function LanguageMenu() {
    const { i18n } = useTranslation();

    return (
        <nav className="language-menu">
            <ul>
                <li>
                    <span onClick={() => i18n.changeLanguage("pt_BR")}>Português</span>
                </li>
                <span> | </span>
                <li>
                    <span onClick={() => i18n.changeLanguage("en_US")}>English</span>
                </li>
            </ul>
        </nav>
    );
}

export default LanguageMenu;