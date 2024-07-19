import Link from 'next/link';

export default function Projects() {
  return (
    <div>
      <h1>Mes Projets</h1>
      <ul>
        <li>Projet 1 : Description du projet 1</li>
        <li>Projet 2 : Description du projet 2</li>
        <li>Projet 3 : Description du projet 3</li>
      </ul>
      <Link href="/">Retour à l'accueil</Link>
    </div>
  );
}
