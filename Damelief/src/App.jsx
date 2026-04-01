import Home from "./pages/Home";
import Aanbod from "./pages/Aanbod";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AfspraakMaken from "./pages/AfspraakMaken";
import "../src/styling/App/App.css"; // we gebruiken deze voor alle globale styling

function App() {
  return (
    <div className="page">
      <Navbar />

      <main className="page__content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aanbod" element={<Aanbod />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/afspraak-maken" element={<AfspraakMaken />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;