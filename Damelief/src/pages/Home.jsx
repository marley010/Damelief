import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      
      <section className="content">
        <h2>Welkom!</h2>
        <p>Dit is jouw React website template.</p>
      </section>

    </>
  );
}

export default Home;