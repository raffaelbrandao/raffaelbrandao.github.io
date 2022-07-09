import React from 'react';
import './Welcome.css';
import { useTranslation } from 'react-i18next';
import GithubIcon from "../../../assets/images/icons/github.svg";
import LinkedInIcon from "../../../assets/images/icons/linkedin.svg";

function Welcome() {
    const { t } = useTranslation();

    return (

        <div className="welcome">
            <h1>{t('welcome.heading')}</h1>
            <h2>{t('welcome.role')}</h2>

            <nav className="social-media">
                <ul>
                    <li>
                        <a href="https://github.com/raffaelbrandao">
                            <img src={GithubIcon} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/raffaelbrandao">
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Welcome;