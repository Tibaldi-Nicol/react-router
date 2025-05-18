import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chi-siamo">Chi Siamo</NavLink>
      <NavLink to="/prodotti">Prodotti</NavLink>
    </nav>
  );
}
