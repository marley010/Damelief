import { useNavigate } from "react-router-dom";
import "../styling/OverOns/OverOns.css";

function OverOns() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="background-image" />

      <div className="fade-top" />
      <div className="fade-bottom" />

      <div className="content">
        <div className="text-bubble">
          <p>Dit is de over-ons pagina.</p>
        </div>
      </div>
    </div>
  );
}

export default OverOns;