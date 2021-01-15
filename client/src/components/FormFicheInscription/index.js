import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Checkbox, Row, Col } from "antd";

const FormFicheInscription = ({ isDarkMode, Dark }) => {
  console.log("Dark", Dark);
  // les States
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState();
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState();
  const [tel, setTel] = useState();
  const [activities, setActivities] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/fiche-inscription", {
      name,
      prenom,
      email,
      sex,
      date,
      adresse,
      ville,
      codePostal,
      tel,
      activities,
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

  const HandleChangeSex = (e) => {
    const sex = e.target.value;
    setSex(sex);
    // console.log("sex:", e.target.value);
  };

  const HandleChangeDate = (e) => {
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

  const handleChangeActivity = (checkedValues) => {
    const activityChecked = checkedValues;
    setActivities(activityChecked);
    // console.log("activityChecked = ", activityChecked);
  };

  return (
    <div>
      <p style={{ fontSize: "35px" }}> Formulaire d'inscription</p>

      <Form
        className="ficheInscription"
        onSubmit={handleSubmit}
        action="Post"
        type="submit"
      >
        <div>
          <Form.Group controlId="formBasicName" onChange={HandleChangeName}>
            <Form.Control type="text" placeholder="Name" defaultValue={name} />
          </Form.Group>

          <Form.Group controlId="formBasicPrenom" onChange={HandleChangePrenom}>
            <Form.Control
              type="text"
              placeholder="Prenom"
              defaultValue={prenom}
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group controlId="formBasicDate" onChange={HandleChangeDate}>
            <Form.Control type="date" defaultValue={date} />
          </Form.Group>

          <Form.Group
            id="formGroup-option"
            // style={{ width: 250 }}
            controlId="formBasicSex"
            onChange={HandleChangeSex}
          >
            <Form.Control as="select">
              <option>Feminin</option>
              <option>Masculin</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div>
          <Form.Group
            controlId="formBasicEmail"
            onChange={HandleChangeEmail}
            required
            type="email"
          >
            <Form.Control
              type="text"
              placeholder="Email"
              defaultValue={email}
            />
          </Form.Group>

          <Form.Group
            controlId="formBasicTel"
            onChange={HandleChangeTel}
            required
            type="tel"
          >
            <Form.Control type="text" placeholder="Tel" defaultValue={tel} />
          </Form.Group>
        </div>
        <div>
          <Form.Group
            controlId="formBasicAdresse"
            onChange={HandleChangeAdresse}
            required
            type="tel"
          >
            <Form.Control
              type="text"
              placeholder="Adresse"
              defaultValue={adresse}
            />
          </Form.Group>

          <Form.Group
            controlId="formBasicCodePostal"
            onChange={HandleChangeCodePostal}
            required
            type="text"
          >
            <Form.Control
              type="text"
              placeholder="Code postal"
              defaultValue={codePostal}
            />
          </Form.Group>
        </div>

        <div>
          <Form.Group
            controlId="formBasicVille"
            onChange={HandleChangeVille}
            required
            type="tel"
          >
            <Form.Control
              type="text"
              placeholder="Ville"
              defaultValue={ville}
            />
          </Form.Group>
        </div>

        <p style={{ fontSize: "20px" }}>Activités choisies</p>
        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={handleChangeActivity}
          activities={activities}
        >
          <Row>
            <Col span={8}>
              <Checkbox value="Judo">
                <span className={isDarkMode ? "darkMode" : null}>Judo</span>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="JJB">
                <span className={isDarkMode ? "darkMode" : null}>JJB</span>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="MMA" className={isDarkMode ? "darkMode" : null}>
                <span>MMA</span>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Muay Thaï">
                <span className={isDarkMode ? "darkMode" : null}>
                  Muay Thaï
                </span>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Lady Boxing">
                <span className={isDarkMode ? "darkMode" : null}>
                  Lady Boxing
                </span>
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <br />

        <div className=" downloadfile col-sm-9 formControls">
          <div>
            <label>Certificat Médical</label>
            <input
              style={{ fontSize: 15 }}
              type="file"
              name="form[fu_certificat_medical]"
              id="fu_certificat_medical"
              class="rsform-upload-box"
              data-rsfp-size="10485760"
            />
          </div>
          <div>
            <label>Photos d'Identité</label>
            <input
              style={{ fontSize: 15 }}
              type="file"
              name="form[fu_photo-identite]"
              id="fu_photo-identite"
              class="rsform-upload-box"
              data-rsfp-size="10485760"
            />
          </div>
          <div>
            <label>Autorisation Parentale</label>
            <input
              style={{ fontSize: 15 }}
              type="file"
              name="form[fu_autorisation]"
              id="fu_autorisation"
              class="rsform-upload-box"
              data-rsfp-size="10485760"
            />
          </div>
          <div>
            <label>Assurance</label>
            <input
              style={{ fontSize: 15 }}
              type="file"
              name="form[fu_assurance]"
              id="fu_assurance"
              class="rsform-upload-box"
              data-rsfp-size="10485760"
            />
          </div>
        </div>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default FormFicheInscription;
