import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// import Map from "../../components/map";
// import FacebookPage from "../../components/FacebookPage";

const Contact = () => {
  // les States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  // console.log('name =>', name);
  // console.log('email =>', email);
  // console.log('message =>', message);

  return (
    <div className="container">
      <div className="row">
        <div className="contact">
          {/* <FacebookPage /> */}
          <div className="contact-content">
            <div className="contacts">
              <p style={{fontSize:"35px"}}>Nous contacter</p>
              <br />
              <p>
                Tél : 06 15 37 71 51 (Professeur)
              </p>
              <p>Tél : 01 48 26 39 11 (Secrétariat)</p>
            </div>
              <br />

            <div className="formulaire">
              <Form onSubmit={handleSubmit} action="Post" type="submit">
                <Form.Group
                  controlId="formBasicPassword"
                  onChange={HandleChangeName}
                >
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

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
                  <Form.Control className="textarea_contact"  as="textarea" rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Envoyer
                </Button>
              </Form>
            </div>

            <div className="transports">
              <h2>Transports</h2>
              <p>Métro : Ligne 13 – station « Saint-Denis Université »</p>
              <p>Bus : Lignes 256 – 356 – station « Général Leclerc »</p>
              <p>Tram : Lignes T5 – station « Roger Sémat »</p>
              <p>Adresse : 4 av de Stalingrad Saint-Denis 93200</p>
            </div>

            <div className="acces-map">
            <p style={{fontSize:"35px"}}>ACCÈS</p>
              {/* <Map /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
