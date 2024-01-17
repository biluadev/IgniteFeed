import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/biluadev.png',
      name: 'Estevão Bilua',
      role: 'CEO @ UniTuenda'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio' },
      { type: 'link', content: 'bilua.dev/unituenda' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev!' },
      { type: 'paragraph', content: 'Este semana tem novidades no ignith higer' },
      { type: 'link', content: 'diego.design/free' },
    ],
    publishedAt: new Date('2024-01-03 19:23:24'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
