import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail'; 
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/prodotti" element={<Product />} />
        <Route path="/prodotti/:id" element={<ProductDetail />} /> 
      </Routes>
    </>
  );
}
