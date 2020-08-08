import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      .then(() => alert("Success!"))
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
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;
