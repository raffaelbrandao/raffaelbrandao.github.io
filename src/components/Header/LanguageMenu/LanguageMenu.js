import React from 'react';
import './LanguageMenu.css';
import { useTranslation } from 'react-i18next';

function LanguageMenu() {
    const { i18n } = useTranslation();

    return (
        <nav className="language-menu">
            <ul>
                <li>
                    <button onClick={() => i18n.changeLanguage("pt_BR")}>Português</button>
                </li>
                <span> | </span>
                <li>
                    <button onClick={() => i18n.changeLanguage("en_US")}>English</button>
                </li>
            </ul>
        </nav>
    );
}

export default LanguageMenu;