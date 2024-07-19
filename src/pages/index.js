import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    
  return (
    <div className={styles.container}>
      <h1>Bienvenue sur mon portfolio</h1>
      <nav>
        <ul className={styles.ul}>
            <div className={styles.li}>
                <li className={styles.a}><Link href="/skills">Compétences</Link></li>
                <li className={styles.a}><Link href="/projects">Projets</Link></li>
                <li className={styles.a}><Link href="/contact">Contact</Link></li>
            </div>
        </ul>
      </nav>
    </div>
  );
}
