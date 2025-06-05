import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Logiciel thérapeute</h1>
      <p>Bienvenue sur votre application de suivi psychologique.</p>
      <ul>
        <li><Link href="/patients">📋 Voir la liste des patients</Link></li>
      </ul>
    </div>
  );
}