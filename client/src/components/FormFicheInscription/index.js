import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Checkbox, Row, Col } from "antd";

import Cookies from "js-cookie";

const FormFicheInscription = ({ isDarkMode, Dark }) => {
  // les States
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState();
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState();
  const [phone, setPhone] = useState();
  const [activities, setActivities] = useState([]);
  const [droitImage, setDroitImage] = useState(false);
  const [certificatM, setCertificatM] = useState();
  const [photo, setPhoto] = useState();
  const [autorisation, setAutorisation] = useState();
  const [assurance, setAssurance] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", name);
    formData.append("lastname", prenom);
    formData.append("email", email);
    formData.append("sex", sex);
    formData.append("date", date);
    formData.append("adresse", adresse);
    formData.append("ville", ville);
    formData.append("codePostal", codePostal);
    formData.append("phone", phone);
    formData.append("activities", activities);
    formData.append("droitImage", droitImage);
    formData.append("certificatM", certificatM);
    formData.append("photo", photo);
    formData.append("autorisation", autorisation);
    formData.append("assurance", assurance);

    const response = await axios.post("/fiche-inscription", formData
    // , {
    //   headers: {
    //     authorization: "Berer " + Cookies.get("token"),
    //   },
    // }
    );

  console.log("formData", formData);
    console.log("response", response);
    // console.log({
    //   certificatM,
    //   photo,
    //   autorisation,
    //   assurance
    // });
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
    console.log("sex:", e.target.value);
  };

  const HandleChangeDate = (e) => {
    const date = e.target.value;
    setDate(date);
    // console.log(e.target.value)
  };

  const HandleChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
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
    console.log("activityChecked = ", activityChecked);
  };

  const handleChangeDroitImage = (checkedValues) => {
    const droitImageChecked = checkedValues;
    if (checkedValues) {
      setDroitImage(!droitImage);
    }
    console.log("droitImageChecked = ", droitImageChecked);
  };

  const handleChangeCertif = (e) => {
    const newCertif = e.target.files;
    if (newCertif.length > 0){
      setCertificatM(newCertif[0]);
    } 
  };

  const handleChangePhoto = (e) => {
    const newPhoto = e.target.files;
    if(newPhoto.length > 0){
      setPhoto(newPhoto[0]);
    }
  };

  const handleChangeAuthorisation = (e) => {
    const newAutorisation = e.target.files;
    if(newAutorisation.length > 0){
      setAutorisation(newAutorisation[0]);
    }
  };

  const handleChangeAssurace = (e) => {
    const newAssurance = e.target.files;
    if(newAssurance.length > 0){
      setAssurance(newAssurance[0]);
    }
  };

  return (
    <div className="formInscription">
      <div className="content">
        <p style={{ fontSize: "35px" }}> Formulaire d'inscription</p>

        <Form
          className="ficheInscription"
          onSubmit={handleSubmit}
          // action="/upload"
          method="POST"
          type="submit"
        >
          <div>
            <Form.Group controlId="formBasicName" onChange={HandleChangeName}>
              <Form.Control
                type="text"
                placeholder="Name"
                defaultValue={name}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicPrenom"
              onChange={HandleChangePrenom}
            >
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
              onChange={HandleChangePhone}
              required
              type="tel"
            >
              <Form.Control
                type="text"
                placeholder="Tel"
                defaultValue={phone}
              />
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
                <Checkbox
                  value="MMA"
                  className={isDarkMode ? "darkMode" : null}
                >
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
          <p style={{ fontSize: "20px" }}>Droit à l'image</p>
          <Checkbox.Group
            onChange={handleChangeDroitImage}
            droitimage={droitImage ? 1 : 0}
          >
            <Checkbox
              value="Autrisation droit à l'image"
              style={{ paddingRight: 10 }}
            />
            <Col span={8}>
              <span className={isDarkMode ? "darkMode" : null}>
                J'autorise l'AGSD à prendre des photos ou des videos pour
                d'éventuelles parutions,projections événementielles pour
                l'association (DVD, plaquettes, site web, articles de journaux,
                calendrier...)
              </span>
            </Col>
          </Checkbox.Group>

          <br />

          <p style={{ fontSize: "20px" }}>Documents à nous renvoyer</p>
          <div className=" downloadfile col-sm-9 formControls">
            <div>
              <label>Certificat Médical</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="certificat_medical"
                id="certificat_medical"
                className="rsform-upload-box"
                data-rsfp-size="10485760"
                onChange={handleChangeCertif}
              />
            </div>
            <div>
              <label>Photos d'Identité</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="photo"
                id="photo"
                className="rsform-upload-box"
                data-rsfp-size="10485760"
                onChange={handleChangePhoto}
              />
            </div>
            <div>
              <label>Autorisation Parentale</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="autorisation"
                id="autorisation"
                className="rsform-upload-box"
                data-rsfp-size="10485760"
                onChange={handleChangeAuthorisation}
              />
            </div>
            <div>
              <label>Assurance</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="assurance"
                id="assurance"
                className="rsform-upload-box"
                data-rsfp-size="10485760"
                onChange={handleChangeAssurace}
              />
            </div>
          </div>
          <br />
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormFicheInscription;
