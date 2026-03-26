import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>Dit is de contact pagina.</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Contact;
