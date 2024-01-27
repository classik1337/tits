import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";


export const metadata = {
  title: "Кабинет"
}
export default function Cabinet() {
  return (
    <main className={styles.main}>
      <Menu/>
      <div className={styles.description}>
        <div className={styles.square}>

          <div className={styles.block}>
          <div className={styles.block2}></div>
          </div>
          <div className={styles.block}>
          <div className={styles.block2}></div>
          </div>

        </div>
        Кабинет
      </div>
    </main>
  );
}
