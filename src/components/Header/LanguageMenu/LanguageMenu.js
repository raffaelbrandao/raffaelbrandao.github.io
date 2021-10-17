import React from 'react';
import './LanguageMenu.css';
import { useTranslation } from 'react-i18next';

function LanguageMenu() {
    const { i18n } = useTranslation();

    return (
        <nav className="language-menu">
            <ul>
                <li>
                    <a lang="pt_BR" hreflang="pt_BR" href="#" role="option" onClick={() => i18n.changeLanguage("pt_BR")}>Português</a>
                </li>
                <span> | </span>
                <li>
                    <a lang="en_US" hreflang="en_US" href="#" role="option" onClick={() => i18n.changeLanguage("en_US")}>English</a>
                </li>
            </ul>
        </nav>
    );
}

export default LanguageMenu;