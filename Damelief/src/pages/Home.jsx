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
          <p>VOOR WIE</p>
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
          <div>
            <p className="emoji">🧩</p>
            <h3>Je voelt je vastzitten zonder duidelijke reden</h3>
            <p>Er is een gevoel van stilstand of onrust, maar je kunt er geen concrete oorzaak aan koppelen. Alsof er iets onder de oppervlakte speelt.</p>
         </div>
       </article>
      </section>

    
    </main>
  );
}

export default Home;