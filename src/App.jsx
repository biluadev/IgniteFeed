import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Bilua"
            content="Quero me viciar em programação!"
          />

          <Post
            author="VaGnei"
            content="Programador Internacional!"
          />
        </main>
      </div>
    </div>
  )
}