import Link from 'next/link';

export default function Plan() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Plan d’accompagnement clinique</h1>
      <ul>
        <li><strong>Court terme :</strong> Stabilisation émotionnelle et lien thérapeutique</li>
        <li><strong>Moyen terme :</strong> Exploration des affects et schémas de répétition</li>
        <li><strong>Long terme :</strong> Travail identitaire, ouverture au changement</li>
      </ul>
      <Link href="/">← Retour</Link>
    </div>
  );
}