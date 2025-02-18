import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../css/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,// Reemplaza con tu Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Reemplaza con tu Template ID
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID // Reemplaza con tu Public Key (User ID)
    )
    .then(() => {
      alert("Correo enviado con éxito.");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un problema al enviar el correo.");
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Fill out the form</h2>
      <p>I will answer you as soon as possible</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type here your message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
