import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function ClientList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/clients')
      .then((res) => setClients(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h2>Clients</h2>
      {clients.length === 0 ? (
        <div>No clients yet</div>
      ) : (
        <ul>
          {clients.map((c) => (
            <li key={c._id}>
              <strong>{c.name}</strong> — {c.email || 'no email'} — {c.phone || 'no phone'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
