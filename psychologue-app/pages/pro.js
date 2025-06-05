import Link from 'next/link';

export default function Pro() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Espace professionnel</h1>
      <ul>
        <li><Link href="/patients">📋 Liste des patients</Link></li>
        <li><Link href="/ajout">➕ Ajouter un patient</Link></li>
        <li><Link href="/transcription">🎙️ Transcription IA</Link></li>
        <li><Link href="/plan">🧠 Plan clinique</Link></li>
      </ul>
      <Link href="/">← Retour</Link>
    </div>
  );
}