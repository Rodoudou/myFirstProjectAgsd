import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const FicheInscription = () => {
  // les States
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState();
  const [email, setEmail] = useState("");
  const [lieu, setLieu] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/mail", {
      name,
      email,
      subject,
      message,
    });
    console.log("response", response);
  };

  const HandleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
    // console.log(e.target.value)
  };

  const HandleChangePrenom = (e) => {
    const prenom = e.target.value;
    setPrenom(prenom);
    // console.log(e.target.value)
  };

  const HandleChangeDAte = (e) => {
    const date = e.target.value;
    setDate(date);
    // console.log(e.target.value)
  };
  

  const HandleChangeLieuNaissance = (e) => {
    const lieu = e.target.value;
    setLieu(lieu);
    // console.log(e.target.value)
  };

  const HandleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    // console.log(e.target.value)
  };

  const HandleChangeSubject = (e) => {
    const subject = e.target.value;
    setSubject(subject);
    // console.log(e.target.value)
  };

  const HandleChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
    // console.log(e.target.value)
  };
  return (
    <div>
      <h2>Fiche d'inscription</h2>
      <Form
        className="ficheInscription"
        onSubmit={handleSubmit}
        action="Post"
        type="submit"
      >
        <div>
          <Form.Group controlId="formBasicPassword" onChange={HandleChangeName}>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            onChange={HandleChangePrenom}
          >
            <Form.Control type="text" placeholder="Prenom" />
          </Form.Group>
        </div>
        <div>
          <Form.Group controlId="formBasicPassword" onChange={HandleChangeDAte}>
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            onChange={HandleChangeLieuNaissance}
          >
            <Form.Control type="text" placeholder="Lieu de naissance" />
          </Form.Group>
        </div>

        <Form.Group
          controlId="formBasicEmail"
          onChange={HandleChangeEmail}
          required
          type="email"
          value={email}
        >
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group
          controlId="formBasicEmail"
          onChange={HandleChangeSubject}
          required
          type="text"
          value={subject}
        >
          <Form.Control type="text" placeholder="Objet" />
        </Form.Group>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          onChange={HandleChangeMessage}
        >
          <Form.Control className="textarea_contact" as="textarea" rows={4} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default FicheInscription;
