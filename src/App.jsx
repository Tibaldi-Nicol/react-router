import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/prodotti" element={<Product />} />
      </Routes>
    </>
  );
}
