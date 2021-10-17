import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <section className="about content-section">
            <div className="container">
                <h2>{t('about.heading')}</h2>
                <p>{t('about.about')}</p>
            </div>
        </section>
    );
}

export default About;