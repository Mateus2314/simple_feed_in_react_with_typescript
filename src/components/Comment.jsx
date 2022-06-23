
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment({ content, onDeleteComment }) {


  const [likeCount, setLikeCount] = useState(0);


  function handleDeleteComment() {

    onDeleteComment(content);

  }

  function handleLikeComment() {
    setLikeCount( (state) => {
      return state + 1 
    });

  }


  return (
    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/10038792?v=4" />
      <div className={styles.commentBox}>

        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>

              <strong>Mateus De La Fuente Cezar</strong>
              <time title='14 de junho às 14h40' dateTime="2022-06-14 14:40:10"> Cerca de 1h atras </time>

            </div>

            <button onClick={handleDeleteComment} title='Deletar'> <Trash size={20} ></Trash> </button>

          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>

          <button onClick={handleLikeComment} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>

        </footer>

      </div>

    </div>
  )

}