function Aanbod() {
  return (
    <main className="aanbod">

      {/* HERO */}
      <section className="aanbod__hero">
        <div className="aanbod__container">
          <h1>Aanbod</h1>
          <p className="aanbod__subtitle">
            Begeleiding voor lichaam, energie en patronen
          </p>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="aanbod__section">
        <div className="aanbod__container aanbod__split">

          <div className="aanbod__content">

            <h2 className="aanbod__title">Voor wie?</h2>

            <div className="aanbod__card">
              <p>
                Herken jij dit? Je doet alles goed: gezond eten, sporten, mediteren,
                maar je voelt je nog steeds uitgeput. Deze begeleiding is voor jou als
                je voelt dat je lichaam signalen geeft, maar je daar nog geen duidelijke
                oplossing voor hebt gevonden.
              </p>
            </div>

            <div className="aanbod__card aanbod__highlight">
              <p>Je herkent je bijvoorbeeld in één of meerdere van de volgende klachten:</p>
              <ul>
                <li>je energie zakt weg na het eten</li>
                <li>je wordt moe wakker, ondanks een volle nacht slapen</li>
                <li>je hoofd staat altijd “aan” en komt moeilijk tot rust</li>
                <li>je hebt last van een opgeblazen gevoel, darmklachten of schommelingen in je bloedsuiker</li>
                <li>je ervaart hormonale klachten (PMS, cyclus, overgang, stemmingswisselingen)</li>
                <li>je voelt je vaak gespannen, overprikkeld of uit balans</li>
              </ul>
            </div>

            <div className="aanbod__card">
              <p>
                Tegelijkertijd merk je misschien dat er op een diepere laag iets speelt:
              </p>
              <ul>
                <li>je loopt steeds tegen dezelfde patronen aan in relaties of werk</li>
                <li>je vindt het lastig om grenzen te voelen of aan te geven</li>
                <li>je draagt verantwoordelijkheid die niet van jou is</li>
                <li>je voelt je snel schuldig of past je veel aan</li>
                <li>je hebt het gevoel dat je “vastzit” zonder precies te weten waarom</li>
              </ul>
            </div>

            <div className="aanbod__card aanbod__highlight">
              <p>
                Vaak zijn deze lichamelijke en emotionele signalen met elkaar verbonden.
                Je lichaam liegt niet en laat zien waar aandacht nodig is.
              </p>

              <p style={{ marginTop: "10px" }}>
                Je hoeft het niet eerst helemaal te begrijpen. Als jij voelt dat het anders mag,
                meer rust, meer energie, meer jezelf, dan ben je hier op de juiste plek.
              </p>
            </div>

          </div>

          {/* VISUAL */}
          <div className="aanbod__visual">
            <div className="aanbod__imageCard">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Rust en balans"
                className="aanbod__image"
              />
            </div>
          </div>

        </div>
      </section>

      {/* TARIEVEN */}
      <section className="aanbod__section aanbod__section--alt">
        <div className="aanbod__container">

          <h2 className="aanbod__title">Aanbod & tarieven</h2>

          <div className="aanbod__grid">

            <div className="aanbod__card">
              <h3>Orthomoleculair advies</h3>
              <p>Eerste consult €120,- (max. 90 min)</p>
              <p>Vervolgconsult €80,- (max. 60 min)</p>
            </div>

            <div className="aanbod__card aanbod__highlight">
              <h3>Systemisch coaching</h3>
              <p>Familieopstellingen €110,- per sessie</p>
            </div>

            <div className="aanbod__card">
              <h3>Groepssessies</h3>
              <p>Prijs afhankelijk van opzet en duur</p>
            </div>

            <div className="aanbod__card">
              <h3>Bedrijfsopstellingen</h3>
              <p>Op aanvraag – vrijblijvende offerte</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Aanbod;