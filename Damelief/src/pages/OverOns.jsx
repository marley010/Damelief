import "../styling/pages/_overons.scss";

function OverOns() {
  return (
    <div className="about">

      {/* HERO */}
      <header className="about__hero">
        <div className="about__container">
          <h1>Over mij</h1>
          <p className="about__subtitle">
            Orthomoleculair therapeut & systemisch coach
          </p>
        </div>
      </header>

      {/* OVER MIJ */}
      <section className="about__section">
        <div className="about__container about__grid">

          <div className="about__card about__card--full">
            <p>
              Mijn naam is Hatice en mijn missie is om vrouwen te helpen hun energie, balans en innerlijke rust te herstellen...
            </p>
          </div>


          <div className="about__card about__card--full">
            <p>
              Als orthomoleculair therapeut en systemisch coach begeleid ik vrouwen in het herstellen van hun fysieke en mentale gezondheid...
            </p>
          </div>

          <div className="about__card about__card--full">
            <p>
              Mijn visie is dat gezondheid meer is dan de afwezigheid van klachten...
            </p>
          </div>

          <div className="about__card about__card--full about__highlight">
            <p>
              Voel je dat het anders mag? Meer energie, rust en verbinding met jezelf? Dan ben je welkom.
            </p>
          </div>

        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="about__section about__section--alt">
        <div className="about__container about__grid">

          <h2 className="about__title">Werkwijze</h2>

          <div className="about__card">
            <p>Intake waarin we jouw klachten, leefstijl en achtergrond analyseren.</p>
          </div>

          <div className="about__card">
            <p>Persoonlijk traject met voeding, suppletie, coaching en systemisch werk.</p>
          </div>

          <div className="about__card">
            <p>We werken stap voor stap, in jouw tempo en met haalbare acties.</p>
          </div>

          <div className="about__card about__card--full">
            <p>
              Doel: duurzame balans, inzicht en regie over je gezondheid.
            </p>
          </div>

        </div>
      </section>

      {/* VOOR WIE */}
      <section className="about__section">
        <div className="about__container about__grid">

          <h2 className="about__title">Voor wie</h2>

          <div className="about__card about__card--full">
            <p>
              Deze begeleiding is voor vrouwen die zich herkennen in langdurige vermoeidheid, onrust of terugkerende patronen.
            </p>
          </div>

          {[
            "Energie dips na het eten",
            "Vermoeid wakker worden",
            "Altijd ‘aan’ staan",
            "Darm- of hormonale klachten",
            "Overprikkeling en stress",
          ].map((item, i) => (
            <div className="about__card" key={i}>
              <p>{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* AANBOD */}
      <section className="about__section about__section--alt">
        <div className="about__container about__grid">

          <h2 className="about__title">Aanbod</h2>

          <div className="about__card">
            <h3>Orthomoleculair advies</h3>
            <p>Intake €120 (90 min)</p>
            <p>Vervolg €80 (60 min)</p>
          </div>

          <div className="about__card">
            <h3>Systemisch coaching</h3>
            <p>Opstellingen €110 per sessie</p>
            <p>Groep & bedrijf op aanvraag</p>
          </div>

          <div className="about__card about__card--full about__note">
            <p>*Prijzen kunnen variëren afhankelijk van traject.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default OverOns;