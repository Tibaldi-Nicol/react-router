
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Errore nel caricamento del prodotto:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Caricamento dettaglio...</p>;
  if (!product) return <p>Prodotto non trovato.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/prodotti">← Torna alla lista</Link>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p><strong>Prezzo:</strong> €{product.price}</p>
    </div>
  );
}
