import { useState } from 'react';
import Link from 'next/link';

export default function AjouterPatient() {
  const [nom, setNom] = useState('');
  const [code, setCode] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Fonction "ajouter un patient" en construction. Nom : ' + nom);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Ajouter un patient</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom : <input value={nom} onChange={e => setNom(e.target.value)} /></label><br />
        <label>Code interne : <input value={code} onChange={e => setCode(e.target.value)} /></label><br />
        <label>Note initiale : <textarea value={note} onChange={e => setNote(e.target.value)} /></label><br />
        <button type="submit">Ajouter</button>
      </form>
      <Link href="/">← Retour</Link>
    </div>
  );
}