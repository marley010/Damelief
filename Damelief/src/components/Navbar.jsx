import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
<nav className="navbar">
  <h1 
    className="navbar__title"
    onClick={() => navigate("/")}
  >
    MijnSite
  </h1>

  <ul className="navbar__list">
    <li className="navbar__list-item" onClick={() => navigate("/")}>Home</li>
    <li className="navbar__list-item" onClick={() => navigate("/aanbod")}>Aanbod</li>
    <li className="navbar__list-item" onClick={() => navigate("/over-ons")}>Over Ons</li>
    <li className="navbar__list-item" onClick={() => navigate("/contact")}>Contact</li>
    <li className="navbar__list-item" onClick={() => navigate("/afspraak-maken")}>Afspraak Maken</li>
  </ul>
</nav>
  );
}

export default Navbar;
