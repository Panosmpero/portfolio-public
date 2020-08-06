import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("ERROR")
      }
    };
    xhr.send(data);
  }

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit}
        action="https://formspree.io/xeqrnlbv"
        method="POST"
        data-netlify="true"
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
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="recaptcha-container" data-netlify-recaptcha="true"></div>
        <div className="g-recaptcha" data-sitekey="6LcfD7sZAAAAAPBOcwNq2_CUENYcDdUpWxzEW_tB" ></div>
        <div className="submit-status">{status}</div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;
