import { useNavigate } from "react-router-dom";
import "../styling/Navbar/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1>MijnSite</h1>
      <ul className="navbar__list">
        <li className="navbar__list__button" onClick={() => navigate("/")}>Home</li>
        <li className="navbar__list__button" onClick={() => navigate("/aanbod")}>Aanbod</li>
        <li className="navbar__list__button" onClick={() => navigate("/over-ons")}>Over Ons</li>
        <li className="navbar__list__button" onClick={() => navigate("/contact")}>Contact</li>
        <li className="navbar__list__button" onClick={() => navigate("/afspraak-maken")}>Afspraak Maken</li>
      </ul>
    </nav>
  );
}

export default Navbar;
