
import styles from "./page.module.css";

import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: "Домашняя"
}

export default function Home() {
  return (
    <main className={styles.main}>

      <Menu/>
      <div className={styles.description}>
        Домашняя
      </div>
    </main>
  );
}
