import React from 'react';
import './LanguageMenu.css';
import { useTranslation } from 'react-i18next';

function LanguageMenu() {
    const { i18n } = useTranslation();
    const options = [
        { value: "pt_BR", text: "Português do Brasil" },
        { value: "en_US", text: "English US" }
    ];
    return (
        <div className="language-menu">
            <select aria-label="change language" onChange={(event) => i18n.changeLanguage(event.target.value)}>
                {options.map(option => (<option key={option.value} value={option.value}>{option.text}</option>))}
            </select>
        </div>
    );
}

export default LanguageMenu;