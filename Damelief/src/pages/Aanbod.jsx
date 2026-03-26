import { useNavigate } from "react-router-dom";

function Aanbod() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Aanbod</h1>
      <p>Dit is de aanbod pagina.</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Aanbod;
