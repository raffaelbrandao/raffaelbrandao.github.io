import React from 'react';
import './Welcome.css';
import GithubIcon from ".../../../src/assets/images/icons/github.svg";
import LinkedInIcon from ".../../../src/assets/images/icons/linkedin.svg";

function Welcome() {
    return (
        <div className="welcome">
            <h1>Oi, eu sou Rafael Brandão</h1>
            <h2>Engenheiro de software</h2>
            <nav class="social-media">
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