import { useNavigate } from "react-router-dom";

function OverOns() {
  const navigate = useNavigate();
  return (
<div className="page__content">
  <div className="page__qa-grid">
    <div className="page__qa page__qa--top-left">
      <h3>Wie zijn wij?</h3>
      <p>Wij zijn een gepassioneerd team dat werkt aan innovatieve oplossingen.</p>
    </div>

    <div className="page__qa page__qa--top-right">
      <h3>Wat doen wij?</h3>
      <p>Wij ontwikkelen moderne webapplicaties met focus op design en gebruiksvriendelijkheid.</p>
    </div>

    <div className="page__qa page__qa--bottom-left">
      <h3>Waarom doen wij dit?</h3>
      <p>Omdat we geloven in technologie die het leven makkelijker maakt.</p>
    </div>

    <div className="page__qa page__qa--bottom-right">
      <h3>Hoe werken wij?</h3>
      <p>Met een agile aanpak en veel aandacht voor detail en kwaliteit.</p>
    </div>
  </div>
</div>
  );
}

export default OverOns;
