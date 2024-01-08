import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

import capaDoPerfil from '../assets/capaDoPerfil.svg';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={capaDoPerfil} 
                alt="Capa do Perfil" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/biluadev.png" alt="" />

                <strong>Estevão Bilua</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}