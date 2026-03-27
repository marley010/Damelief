import { Link, Outlet } from "react-router-dom";
import navLogo from '../assets/images/logo.png'
import "../styling/Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={navLogo} alt="logo" />
        <ul className="navbarList">
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/aanbod'}>Aanbod</Link></li>
          <li><Link to={'/overons'}>Over Ons</Link></li>
          <li><Link to={'contact'}>Contact</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
