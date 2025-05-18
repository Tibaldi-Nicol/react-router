import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Errore durante il fetch:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento prodotti...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Lista Prodotti</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((item) => (
          <li
            key={item.id}
            style={{
              border: '1px solid #ccc',
              marginBottom: '1rem',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <img src={item.image} alt={item.title} width="100" />
            <div>
              <p><strong>{item.title}</strong></p>
              <p>Prezzo: €{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

