import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AfspraakMaken() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    const formValues = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:3001/api/send-afspraak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Email sent successfully:", result);
        alert("Bedankt! Uw afspraak aanvraag is verzonden.");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
      } else {
        console.error("Error sending email:", result);
        alert("Error sending email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email.");
    }
  };
  return (
    <main className="afspraakPage">
      <section className="header">
        <h1>AFSPRAAK MAKEN</h1>
        <p>Dit is de afspraak maken pagina.</p>
      </section>
      <section className="afspraakPage__ruleSet">
        <article className="rules">
        <h2>INFO</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aut et dicta magnam adipisci expedita ducimus, cum a aperiam veniam ea in omnis pariatur soluta qui dolores, at ad distinctio?</p>
        </article>
        <article className="afspraak__afspraakForm">
        <form className="afspraak__form" onSubmit={submitForm}>
          <div className="afspraak__form__container-double">
            <div>
              <label htmlFor="firstname">Voornaam:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="lastname">Achternaam:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="afspraak__form__container">
            <label htmlFor="phone">Telefoonnummer:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="afspraak__form__container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
         <div className="afspraak__form__container">
            <label htmlFor="date">Datum:</label>
           <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="afspraak__form__container">
            <label htmlFor="message">Bericht:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            >
            </textarea>
         </div>
          <button className="afspraak__form__button" type="submit">
            Verstuur
          </button>
        </form>
        </article>
      </section>
    </main>
  );
}

export default AfspraakMaken;
