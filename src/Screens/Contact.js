import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // changed submit from external API to using Netlify's
  // submit form with implemented honeypot
  // the rest of the form is handled in index.html
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => {
        setName("")
        setEmail("")
        setMessage("")
        alert("Success!")
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h2>get in touch</h2>
        <div className="underline"></div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name here..."
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email here..."
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          placeholder="Enter message here..."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">send message</button>
      </form>
    </div>
  );
};

export default Contact;
