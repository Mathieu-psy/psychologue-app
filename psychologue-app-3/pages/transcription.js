import Link from 'next/link';

export default function Transcription() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Transcription audio IA</h1>
      <p>Cette fonction permettra bientôt de charger un fichier audio et d'en générer une transcription + synthèse IA.</p>
      <p>En attendant, cette fonction est simulée.</p>
      <Link href="/">← Retour</Link>
    </div>
  );
}