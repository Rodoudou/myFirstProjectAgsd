import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import CheckActivity from '../CheckActivity';
import SelectOptions from '../SelectOptions';

const FormFicheInscription = ({sex}) => {
      // les States
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  // const[sex, setSex]=useState();
  const [date, setDate] = useState();
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const[ville,setVille]=useState("");
  const [codePostal, setCodePostal] = useState();
  const [tel,setTel]=useState();


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
    // console.log(e.target.value) HandleChangeSex
  };

  // const HandleChangeSex = (e) => {
  //   const sex = e.target.value;
  //   setSex(sex);
  //   // console.log(e.target.value) HandleChangeSex
  // };
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



  const HandleChangeAdresse = (e) => {
    const adresse = e.target.value;
    setAdresse(adresse);
    // console.log(e.target.value)
  };

  const HandleChangeVille = (e) => {
    const ville = e.target.value;
    setVille(ville);
    // console.log(e.target.value)
  };

  const HandleChangeCodePostal = (e) => {
    const codePostal = e.target.value;
    setCodePostal(codePostal);
    // console.log(e.target.value)
  };
  const HandleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    // console.log(e.target.value)
  };

    return (
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
            <Form.Control type="text" placeholder="Prenom" value={prenom}  />
          </Form.Group>
        </div>
        <div>
          <Form.Group controlId="formBasicDate" 
          onChange={HandleChangeDAte} 
          value={date} >
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>

          <Form.Group
            controlId="formBasicSex"
            // onChange={HandleChangeSex}
            value={sex}
          >
            <SelectOptions/>
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
          <Form.Control type="text" placeholder="Email" />
        </Form.Group>

        <Form.Group
          controlId="formBasicTel"
          onChange={HandleChangeTel}
          required
          type="tel"
          value={tel}
        >
          <Form.Control type="text" placeholder="Tel" />
        </Form.Group>
        </div>
        <div>
        <Form.Group
          controlId="formBasicAdresse"
          onChange={HandleChangeAdresse}
          required
          type="tel"
          value={adresse}
        >
          <Form.Control type="text" placeholder="Adresse" />
        </Form.Group>

        <Form.Group
          controlId="formBasicCodePostal"
          onChange={HandleChangeCodePostal}
          required
          type="text"
          value={codePostal}
        >
          <Form.Control type="text" placeholder="Code postal" />
        </Form.Group>
        </div>

        <div>
        <Form.Group
          controlId="formBasicVille"
          onChange={HandleChangeVille}
          required
          type="tel"
          value={ville}
        >
          <Form.Control type="text" placeholder="Ville" />
        </Form.Group>
        </div>


        <h2>Activités choisies</h2>
        <CheckActivity/>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    )
}

export default FormFicheInscription;