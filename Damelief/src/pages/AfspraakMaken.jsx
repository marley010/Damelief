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

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setFormData({
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      date: e.target.date.value,
      message: e.target.message.value,
    });
    console.log(formData);
  };
  return (
    <section className="afspraak">
      <h1>Afspraak Maken</h1>
      <p>Dit is de afspraak maken pagina.</p>
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
          ></textarea>
        </div>
        <button className="afspraak__form__button" type="submit">
          Verstuur
        </button>
      </form>
      <button className="afspraak__button" onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
}

export default AfspraakMaken;
