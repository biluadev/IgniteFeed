import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/diego3g.png" />
                    <div className={styles.authorInfo}>
                        <strong>EstevãO Bilua</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="10 de Janeiro às 18:59" dateTime="2024-01-10 18:59:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera </p>
                <p>Fala galera Fala galera Fala galera Fala galera Fala galera Fala galera Fala galera Fala galera Fala galera Fala galera </p>
                <p><a href="">biluadev.cod/developer</a></p>
                <p><a href="">#novoprojeto #nlw</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário!"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}