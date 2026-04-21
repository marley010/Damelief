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
      <section className="homepage__voorWie">
        <div className="headersecond">
          <p className="topicText">VOOR WIE</p>
          <h2>Herken jij dit?</h2>
          <p>
            Je doet alles goed: gezond eten, sporten, mediteren, maar je voelt je nog steeds uitgeput. 
            <br />
            Deze begeleiding is voor jou als je voelt dat je lichaam signalen geeft, maar je daar nog geen duidelijke oplossing voor hebt gevonden. 
            <br />
            Je herkent je bijvoorbeeld in één of meerdere van de volgende klachten: 
          </p>
        </div> 
        <article className="infoBox">
          <div>
            <p className="emoji">⚡</p>
            <h3>Je energie zakt weg na het eten</h3>
            <p>Schommelende bloedsuiker zorgt voor schommelende energie. Jouw voeding kan een grote rol spelen.</p>
          </div>
          <div>
            <p className="emoji">🌙</p>
            <h3>Je wordt moe wakker, ondanks een volle nacht slapen</h3>
            <p>Diepe vermoeidheid die niet verdwijnt met een rust. Een signaal dat je lichaam iets nodig heeft.</p>
          </div>
          <div>
            <p className="emoji">🌀</p>
            <h3>Je hoofd staat altijd “aan” en komt moeilijk tot rust</h3>
            <p>Piekerenm rusteloosheid, het gevoel dat je nooit echt 'uit' staat. We brengen dat in balans.</p>
          </div>
          <div>
            <p className="emoji">🌸</p>
            <h3>Hormoonklachten in elke levensfase</h3>
            <p>Van je eerste cyclus tot de overgang, ik begeleid vrouwen in elke fase naar meer vitaliteit.</p>
          </div>
          <div>
            <p className="emoji">🔁</p>
           <h3>Je blijft in dezelfde patronen hangen</h3>
           <p>Situaties en relaties lijken zich te herhalen. Alsof je steeds opnieuw in een bekende dynamiek terechtkomt, zonder dat je precies weet hoe je eruit breekt.</p>
          </div>
          <div>
            <p className="emoji">🚧</p>
            <h3>Grenzen voelen en aangeven is lastig</h3>
            <p>Je merkt pas achteraf dat iets te ver ging, of je zegt ‘ja’ terwijl je ‘nee’ voelt. Je eigen ruimte bewaken kost energie.</p>
          </div>
          <div>
            <p className="emoji">🎒</p>
            <h3>Je draagt verantwoordelijkheid die niet van jou is</h3>
            <p>Je neemt snel de rol op je om dingen op te lossen voor anderen. Alsof het jouw taak is om alles draaiende te houden.</p>
          </div>
          <div>
            <p className="emoji">⚖️</p>
            <h3>Je zet jezelf vaak op de laatste plek</h3>
            <p>Je past je aan, voelt je snel schuldig en houdt rekening met iedereen—behalve met jezelf. Je eigen behoeften verdwijnen naar de achtergrond.</p>
          </div>
       </article>
      </section>
      <section className="homepage__sectionThree">
        <article className="headerthird">
          <p className="topicText">MIJN AANPAK</p>
          <h2>Lichaam, geest & systeem</h2>
          <p>Ik combineer drie disciplines tot één persoonlijk traject, Alles hangt samen
            <br />
          en dat is precies hoe ik werk.
          </p>
        </article>
        <article className="infoBox">
          <div>
            <h3>01</h3>
            <h4>Orthomoleculaire Therapie</h4>
            <p>Via voeding en gerichte suppletie breng ik jouw biochemie in balans. Gericht op cellen, hormonen en energie op een fundementeel niveau.</p>
          </div>
          <div>
            <h3>02</h3>
            <h4>Epignetica</h4>
            <p>Jouw genen zijn niet jouw lot. Met epignetica kijken we hoe leefstijl, voeding en omgeving je genexpressie beïnvloeden en hoe je dat kunt sturen.</p>
          </div>
          <div>
            <h3>03</h3>
            <h4>Systemisch Coachen</h4>
            <p>Patronen en overtuigingen die je tegenhouden komen van ergens. Samen onderzoeken we die. Zodat jij je potentieel kan leven.</p>
          </div>
        </article>
      </section>
      <section className="homepage__Quote">
          <h2>"Kleine Aanpassingen in je voeding kunnen grote 
               <br />
               verschuivingen veroozaken."</h2>
          <p> — DAMELIEF </p>
      </section>
      <section className="homepage__Werkwijze">
        <div className="header">
          <p>WERKWIJZE</p>
          <h2>Wat je kunt verwachten</h2>
          <p>Een traject met Damelief is altijd persoonlijk. Geen standaard programma,
            <br />
            maar een aanpak die past bij jouw lichaam, jouw leven en jouw tempo.</p>
        </div>
        <article className="infoBox">
          <div>
            <h3>Educatie en Inzicht</h3>
            <p>Je begrijpt wat er met jouw lichaam gebeurt. Kennis over voeding, hormonen en epigenetics- helder uitgelegd, toepasbaar in je dagelijks leven.</p>
          </div>
          <div>
            <h3>Inspiratie en Motivatie</h3>
            <p>Niet focussen op wat niet kan - maar ontdekken wat er mogelijk is. Met een blik die opent in plaats van-</p>
          </div>
          <div>
            <h3>Persoonlijke Verbinding</h3>
            <p>Ik leer jou kennen- jouw verhaal, jouw systeem, jouw ritme. Zo is elk traject anders en precies goed.</p>
          </div>
          <div>
            <h3>Duurzame Veranderingen</h3>
            <p>Geen quick fix, maar een fundament. Zodat die balans die je opbouwt ook blijft- als jouw nieuwe normaal.</p>
          </div>

        </article>
      </section>

    
    </main>
  );
}

export default Home;