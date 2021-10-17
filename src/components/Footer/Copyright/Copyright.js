import React from 'react';
import './Copyright.css';
import { useTranslation } from 'react-i18next';

function Copyright() {
    const { t } = useTranslation();

    return (
        <div className="copynote">
            <p>&copy; {t('footer.copynote')}</p>
        </div>
    );
}

export default Copyright;