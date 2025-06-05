import patients from '../data/patients.json';
import Link from 'next/link';

export default function Patients() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Liste des patients</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link href={`/patients/${patient.id}`}>{patient.nom}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">← Retour à l'accueil</Link>
    </div>
  );
}