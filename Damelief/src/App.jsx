import { Home, Aanbod, OverOns, Contact, AfspraakMaken } from "./pages";
import { Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import "./styling/global.scss";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aanbod" element={<Aanbod />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/afspraak-maken" element={<AfspraakMaken />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
