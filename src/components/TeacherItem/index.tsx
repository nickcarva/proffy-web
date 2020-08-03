import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/45905851?s=460&u=13218927d578f0832684601d8e6cf734fa3590b1&v=4"
                    alt="Nicolas Carvalho"
                />
                <div>
                    <strong>Nicolas Carvalho Avelaneda</strong>
                    <span>Arqueologia</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /><br />
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 1,50</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whats App"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
