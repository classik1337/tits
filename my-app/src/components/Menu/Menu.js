import styles from "./Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    
<ul className={styles.menu}>
      <li className= {styles.link}><Link href={'/'}>Домашняя</Link></li>
      <li className= {styles.link} ><Link href={'/cabinet'}>Кабинет</Link></li>
      <li className= {styles.link}><Link href={'/contacts'}>Контакты</Link></li>
</ul>
        
    
  );
}
