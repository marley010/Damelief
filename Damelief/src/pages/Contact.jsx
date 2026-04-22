import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    const formValues = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:3001/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Email sent successfully:", result);
        alert("Bedankt! Uw bericht is verzonden.");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
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
    <section className="contact">
      <div className="contact__headerText">
        <h1>CONTACT</h1>
        <p>Vragen? Neem contact op!</p>
      </div>
      <section className="contact__box">
        <div className="contact__box__images"></div>
        <div className="contact__socials">
          <h2>Contact gegevens</h2>
          <div className="line"></div>
          <p>Vragen zelf opzoeken?</p>
          <button>Veelgestelde Vragen</button>
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
    </section>
  );
}

export default Contact;
