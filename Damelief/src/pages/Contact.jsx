import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styling/Contact/Contact.css";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setFormData({
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    });
    console.log(formData);
  };
  return (
    <section className="contact">
      <div className="contact__headerText">
      <h1>CONTACT</h1>
      <p>Vragen? Neem contact op!</p>
      </div>
      <section className="contact__box">
        <div className="contact__box__images">
         
        </div>
        <div className="contact__socials">
          <h2>Contact gegevens</h2>
          <div className="line"></div>
          <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero  dolor, iaculis vitae sodales ac, consectetur vitae urna. Lorem ipsum.</p>
          <p>Vragen zelf opzoeken?</p>
        <button>
          Veelgestelde Vragen
        </button>

        </div>
      <form className="contact__form" onSubmit={submitForm}>
        <div className="contact__form__container-double">
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
        <div className="contact__form__container">
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
        <div className="contact__form__container">
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
        <div className="contact__form__container">
          <label htmlFor="message">Persoonlijk bericht:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button className="contact__form__button" type="submit">
          Verstuur
        </button>
      </form>
      </section>
      <button className="contact__button" onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
}

export default Contact;
