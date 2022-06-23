import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

import cover_image from '../assets/cover_image.svg';
import { Avatar } from './Avatar';

export function Sidebar(){

  return (
    <aside className={styles.sidebar}>

      <img src={cover_image} />

      <div className={styles.profile} > 

      <Avatar src="https://avatars.githubusercontent.com/u/10038792?v=4" />

      
      <strong>Mateus De La Fuente Cezar </strong>
      <span> Web Development </span>
      
      </div>

      <footer>
        <a href="#" > 

        <PencilLine size={20} />
        Perfil Editor </a>
      </footer>



    </aside>
  );

}