import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: "Контакты"
}

export default function contacts() {
  return (
    <main className={styles.main}>
      <Menu/>
      <div className={styles.description}>
        Контакты
      </div>
    </main>
  );
}
