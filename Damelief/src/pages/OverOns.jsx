import { useNavigate } from "react-router-dom";

function OverOns() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Over Ons</h1>
      <p>Dit is de over-ons pagina.</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default OverOns;
