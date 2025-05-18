import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);         // salva i prodotti nello stato
        setLoading(false);
      })
      .catch((err) => {
        console.error('Errore durante il fetch:', err);
        setLoading(false);
      });
  }, []); // solo al primo caricamento

  if (loading) return <p>Caricamento prodotti...</p>;

  return (
    <div>
      <h2>Lista Prodotti</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong><br />
            Prezzo: €{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
