import styles from "./Post.module.css";
export function Post() {
    return (
        <article>
            <header>
                <div className={styles.post}>
                    <img className={styles.avatar} src="https://github.com/biluadev.png" />
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
        </article>
    )
}