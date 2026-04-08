import { useNavigate } from "react-router-dom";

function OverOns() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="page__background-image" />

      <div className="page__fade--top" />
      <div className="page__fade--bottom" />

      <div className="page__content">
        <div className="page__text-bubble">
          <p>Dit is de over-ons pagina.</p>
        </div>
      </div>
    </div>
  );
}

export default OverOns;
