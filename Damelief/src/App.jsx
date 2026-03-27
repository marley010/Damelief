import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Aanbod from "./pages/Aanbod";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import Footer from './components/Footer';


function App() {
  return (
    <>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/aanbod" element={<Aanbod />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
