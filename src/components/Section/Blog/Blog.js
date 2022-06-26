import React from 'react';
import './Blog.css';
import { useTranslation } from 'react-i18next';

function Blog() {
    const { t } = useTranslation();

    return (
        <section className="blog content-section">
            <div className="container">
                <h2>{t('blog.heading')}</h2>
                <nav>
                    <ul>
                        <li><a href="https://blog.raffaelbrandao.com/posts/como_organizar_constantes_em_seu_projeto.html">Como organizar constantes em seu projeto</a></li>
                        <li><a href="https://blog.raffaelbrandao.com/posts/eventos_com_spring.html">Eventos com Spring</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Blog;