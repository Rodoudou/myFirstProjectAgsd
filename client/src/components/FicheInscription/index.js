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
  const [adresse, setAdresse] = useState("");
  const [tel,setTel]=useState();
  const[nationality,setNationality]= useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/mail", {
      name,
      email
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

  const HandleChangeTel = (e) => {
    const tel = e.target.value;
    setTel(tel);
    // console.log(e.target.value)
  };


  const HandleChangeLieuNaissance = (e) => {
    const lieu = e.target.value;
    setLieu(lieu);
    // console.log(e.target.value)
  };
  //HandleChangeAdresse
  const HandleChangeAdresse = (e) => {
    const adresse = e.target.value;
    setAdresse(adresse);
    // console.log(e.target.value)
  };
  const HandleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    // console.log(e.target.value)
  };


  const HandleChangeNationality = (e) => {
    const nationality = e.target.value;
    setNationality(nationality);
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
          <Form.Group controlId="formBasicName" onChange={HandleChangeName}>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group
            controlId="formBasicPrenom"
            onChange={HandleChangePrenom}
          >
            <Form.Control type="text" placeholder="Prenom" />
          </Form.Group>
        </div>
        <div>
          <Form.Group controlId="formBasicDate" onChange={HandleChangeDAte}>
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>

          <Form.Group
            controlId="formBasicLieu"
            onChange={HandleChangeLieuNaissance}
          >
            <Form.Control type="text" placeholder="Lieu de naissance" />
          </Form.Group>
        </div>

        <div>
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
          controlId="formBasicTel"
          onChange={HandleChangeTel}
          required
          type="tel"
          value={tel}
        >
          <Form.Control type="text" placeholder="Tel:" />
        </Form.Group>
        </div>
        <div>
        <Form.Group
          controlId="formBasicNationality"
          onChange={HandleChangeNationality}
          required
          type="text"
          value={nationality}
        >
          <Form.Control type="text" placeholder="Nationalité" />
        </Form.Group>

        <Form.Group
          controlId="formBasicAdresse"
          onChange={HandleChangeAdresse}
          required
          type="tel"
          value={adresse}
        >
          <Form.Control type="text" placeholder="Adresse" />
        </Form.Group>
        </div>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default FicheInscription;
