import Link from 'next/link';

export default function Skills() {
  return (
    <div>
      <h1>Mes Compétences</h1>
      <ul>
        <li>Développement Web (HTML, CSS, JavaScript)</li>
        <li>Frameworks (React, Next.js)</li>
        <li>Programmation (Python, JavaScript)</li>
      </ul>
      <Link href="/">Retour à l'accueil</Link>
    </div>
  );
}
