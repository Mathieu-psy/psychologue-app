import { useRouter } from 'next/router';
import patients from '../../data/patients.json';

export default function PatientFiche() {
  const router = useRouter();
  const { id } = router.query;
  const patient = patients.find(p => p.id === id);

  if (!patient) return <div>Patient non trouvé</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Fiche de {patient.nom}</h1>
      <p><strong>Code interne :</strong> {patient.code}</p>
      <p><strong>Dernière séance :</strong> {patient.derniere_seance}</p>
      <p><strong>Notes :</strong> {patient.notes}</p>
      <p><strong>Synthèse IA :</strong> {patient.syntheseIA}</p>
      <a href="/patients">← Retour à la liste des patients</a>
    </div>
  );
}