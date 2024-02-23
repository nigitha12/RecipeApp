import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  return (
    <form className="form">
      <h1>Contact Us </h1>
      <label>Name</label>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label>Message</label>
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;