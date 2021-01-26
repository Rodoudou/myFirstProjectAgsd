import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { Form, Button } from "react-bootstrap";
import { Checkbox, Row, Col } from "antd";

const FormFicheInscription = ({ isDarkMode }) => {
  const { register, handleSubmit } = useForm();
  // les States
  const [activities, setActivities] = useState([]);
  const [droitImage, setDroitImage] = useState(false);
  const [certificatM, setCertificatM] = useState({});
  const [photo, setPhoto] = useState({});
  const [autorisation, setAutorisation] = useState({});
  const [assurance, setAssurance] = useState({});

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("firstname", data.prenom);
    formData.append("lastname", data.name);
    formData.append("email", data.email);
    formData.append("sex", data.sex);
    formData.append("date", data.date);
    formData.append("adresse", data.adresse);
    formData.append("ville", data.city);
    formData.append("codePostal", data.cdp);
    formData.append("phone", data.phone);
    formData.append("activities", activities);
    formData.append("droitImage", droitImage);
    formData.append("certificatM",certificatM);
    formData.append("photo", photo);
    formData.append("autorisation", autorisation);
    formData.append("assurance", assurance);

    try {
      const response = await axios.post("/fiche-inscription", formData, {
        headers: {
          authorization: "Bearer " + Cookies.get("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      alert(JSON.stringify(response.data));

      console.log("response.data", response.data);
    } catch (err) {
      if (err.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(err.response.data.msg);
      }
    }
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
    if (newCertif.length > 0) {
      setCertificatM(newCertif[0]);
    }
  };

  const handleChangePhoto = (e) => {
    const newPhoto = e.target.files;
    if (newPhoto.length > 0) {
      setPhoto(newPhoto[0]);
    }
  };

  const handleChangeAuthorisation = (e) => {
    const newAutorisation = e.target.files;
    if (newAutorisation.length > 0) {
      setAutorisation(newAutorisation[0]);
    }
  };

  const handleChangeAssurace = (e) => {
    const newAssurance = e.target.files;
    if (newAssurance.length > 0) {
      setAssurance(newAssurance[0]);
    }
  };

  return (
    <div className="formInscription">
      <div className="content">
        <p style={{ fontSize: "35px" }}> Formulaire d'inscription</p>

        <Form
          className="ficheInscription"
          onSubmit={handleSubmit(onSubmit)}
          // action="/fiche-inscription"
          // method="POST"
          type="submit"
        >
          <div>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                ref={register}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPrenom">
              <Form.Control
                type="text"
                placeholder="Prenom"
                name="prenom"
                ref={register}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formBasicDate">
              <Form.Control type="date" name="date" ref={register} />
            </Form.Group>

            <Form.Group id="formGroup-option" controlId="formBasicSex">
              <Form.Control as="select" name="sex" ref={register}>
                <option>Feminin</option>
                <option>Masculin</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="formBasicEmail" required type="email">
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                ref={register}
              />
            </Form.Group>

            <Form.Group controlId="formBasicTel" required type="tel">
              <Form.Control
                type="text"
                placeholder="Tel"
                name="phone"
                ref={register}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formBasicAdresse" required type="tel">
              <Form.Control
                type="text"
                placeholder="Adresse"
                name="adresse"
                ref={register}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCodePostal" required type="text">
              <Form.Control
                type="text"
                placeholder="Code postal"
                name="cdp"
                ref={register}
              />
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="formBasicVille" required type="tel">
              <Form.Control
                type="text"
                placeholder="Ville"
                name="city"
                ref={register}
              />
            </Form.Group>
          </div>

          <p style={{ fontSize: "20px" }}>Activités choisies</p>
          <Checkbox.Group style={{ width: "100%" }} onChange={handleChangeActivity} activities={activities}>
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
          <Checkbox.Group onChange={handleChangeDroitImage} droitimage={droitImage ? 1 : 0}>
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
                name="certificatM"
                ref={register}
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
                name="photo"
                ref={register}
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
                name="autorisation"
                ref={register}
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
                name="assurance"
                ref={register}
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
