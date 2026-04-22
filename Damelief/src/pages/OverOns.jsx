import "../styling/pages/_overons.scss";
import profielFoto from "../assets/images/Instagram.jpg";

const overMijTekst = [
  `Mijn naam is Hatice en mijn missie is om vrouwen te helpen hun energie, balans en innerlijke rust te herstellen, zodat zij zich weer krachtig, helder en in verbinding met zichzelf voelen. In een wereld waarin we vaak “aan” staan en ons aanpassen aan alles om ons heen, help ik vrouwen om weer in contact te komen met hun lichaam en hun eigen ritme. Wanneer de energiestroom weer vrij kan stromen, ontstaat er ruimte voor rust, helderheid en levensenergie.`,

  `Als orthomoleculair therapeut en systemisch coach begeleid ik vrouwen in het herstellen van hun fysieke en mentale gezondheid. Dit doe ik vanuit een integrale benadering, waarbij voeding, beweging en persoonlijke groei samenkomen. We kijken niet alleen naar klachten, maar naar het geheel, zodat we werken aan duurzame verandering in plaats van tijdelijke oplossingen. In mijn begeleiding staat bewustwording centraal. Samen onderzoeken we wat jouw lichaam je vertelt en welke patronen, zichtbaar of onbewust, invloed hebben op jouw welzijn. Vanuit daar creëren we praktische en haalbare stappen die bijdragen aan meer balans, energie en innerlijke rust.`,

  `Mijn visie is dat gezondheid meer is dan de afwezigheid van klachten. Ik streef naar een wereld waarin lichaam en geest in harmonie zijn, en waarin vrouwen bewust investeren in hun eigen welzijn en hun volledige potentieel durven te leven.`
];

const voorWie = [
  "Energie dips na het eten",
  "Vermoeid wakker worden",
  "Altijd ‘aan’ staan",
  "Darm- of hormonale klachten",
  "Overprikkeling en stress",
  "Terugkerende patronen in werk of relaties"
];

function OverOns() {
  return (
    <main className="about">

      {/* HERO */}
      <header className="about__hero">
        <div className="about__container">
          <h1>OVER MIJ</h1>
          <p className="about__subtitle">
            Orthomoleculair therapeut & systemisch coach
          </p>
        </div>
      </header>

      {/* TOP SECTION */}
      <section className="about__split">

        <div className="about__content">

          {overMijTekst.map((text, i) => (
            <div
              key={i}
              className={`about__card about__card--full ${i === overMijTekst.length - 1 ? "about__highlight" : ""}`}
            >
              <p>{text}</p>
            </div>
          ))}

        </div>

        <div className="about__imageWrapper">
          <img src={profielFoto} alt="Hatice" className="about__image" />
        </div>

      </section>

      {/* WERKWIJZE */}
      <section className="about__section">
        <div className="about__container">

          <h2 className="about__title">Werkwijze</h2>

          <div className="about__grid">
            {[
              "Intake + analyse van klachten en leefstijl",
              "Persoonlijk traject met voeding, coaching en systemisch werk",
              "Stap voor stap begeleiding in jouw tempo",
              "Focus op duurzame verandering en inzicht"
            ].map((item, i) => (
              <div className="about__card" key={i}>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default OverOns;