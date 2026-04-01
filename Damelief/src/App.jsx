import Home from "./pages/Home";
import Aanbod from "./pages/Aanbod";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import AfspraakMaken from "./pages/AfspraakMaken";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aanbod" element={<Aanbod />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/afspraak-maken" element={<AfspraakMaken />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
