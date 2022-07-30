import React from 'react';
import './Welcome.css';
import { useTranslation } from 'react-i18next';
import GithubIcon from "../../../assets/images/icons/github.svg";
import LinkedInIcon from "../../../assets/images/icons/linkedin.svg";
import YouTubeIcon from "../../../assets/images/icons/youtube.svg";

function Welcome() {
    const { t } = useTranslation();

    return (

        <div className="welcome">
            <img src="https://s.gravatar.com/avatar/9139cc1361f4451866b1b78be8206285?s=150" alt={t('welcome.profile')} className="avatar"></img>
            <h1>{t('welcome.heading')}</h1>
            <h2>{t('welcome.role')}</h2>

            <nav className="social-media">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/raffaelbrandao" target="_blank" rel="noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/raffaelbrandao" target="_blank" rel="noreferrer">
                            <img src={GithubIcon} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/raffaelbrandao" target="_blank" rel="noreferrer">
                            <img src={YouTubeIcon} alt="YouTube" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Welcome;