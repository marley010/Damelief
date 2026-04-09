import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Home() {
  return (
    <main className="homepage">

      <article className="homepage__header">
        <section className="homepage__Left">
          <p>Orthomoleculair therapeut & systemische coach.</p>
          <p className="sloganText">
            Jouw lichaam <br />
            <span>
              heeft rust nodig,
            </span>
            <br />
            geen druk.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero  dolor, iaculis vitae sodales ac, consectetur vitae urna. Lorem ipsum.
          </p>
          <div className="buttonRow">
            <button className="one">Gratis kennismakings gesprek</button>
            <button className="two">Mijn aanpak</button>
          </div>
        </section>
        <section className="homepage__Right">
          <div className="headerText">
            <h1>DAMELIEF</h1>
            <p>THERAPEUT & COACH</p>
          </div>
          <div className="sloganBox">
            <p className="excp">"Wees lief voor jezelf, dame."</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. 
            </p>
          </div>
          <div className="filterNames">

          </div>
        </section>
      </article>

    
    </main>
  );
}

export default Home;