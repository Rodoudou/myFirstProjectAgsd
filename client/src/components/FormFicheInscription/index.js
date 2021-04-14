import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Checkbox, Row, Col } from "antd";


const FormFicheInscription = ({ isDarkMode, user }) => {
  // les States
  const [droitImage, setDroitImage] = useState();
  const [activities, setActivities] = useState();
  const [certificatM, setCertificatMedical] = useState();
  const [photo, setphoto] = useState();
  const [autorisation, setAutorisation] = useState();
  const [assurance, setAssurance] = useState();

  const { register, handleSubmit, formState, errors, setError } = useForm({
    mode: "onTouched",
  });
  const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;

  console.log(
    `isSubmitted => ${isSubmitted}\n`,
    `isSubmitSuccessful => ${isSubmitSuccessful}`
  );

  const onSubmit = async (data) => {
    console.log("formState fromFich =>", formState);
    console.log(errors);

    try {
      const formData = data;
      formData.activities = activities;
      formData.creator = user;

      const response = await axios.post("/fiche-inscription", formData);
      alert(JSON.stringify(response.data));

      console.log("formData in fiche-inscription =>", formData);
      console.log("response", response);
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
      setCertificatMedical(newCertif[0]);
    }
  };

  const handleChangePhoto = (e) => {
    const newPhoto = e.target.files;
    if (newPhoto.length > 0) {
      setphoto(newPhoto[0]);
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
        {isSubmitSuccessful && (
          <div className="alert alert-success">
            Merci pour votre inscription
          </div>
        )}

        <Form
          className="ficheInscription"
          onSubmit={handleSubmit(onSubmit)}
          type="submit"
        >
          <div>
            <Form.Group>
              <Form.Control
                type="text"
                name="lastname"
                defaultValue="Amrani"
                ref={register({ required: "Vous devez rentrer votre nom" })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                name="firstname"
                defaultValue="Redouane"
                ref={register({ required: "Vous devez rentrer votre prénom" })}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Control
                type="date"
                name="date"
                ref={register({
                  required: "Vous devez rentrer votre date de naissance",
                })}
              />
            </Form.Group>

            <Form.Group id="formGroup-option" controlId="formBasicSex">
              <Form.Control as="select" name="sex" ref={register}>
                <option>Feminin</option>
                <option>Masculin</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                defaultValue="aurele75@email.com"
                ref={register({ required: "Vous devez rentrer votre email" })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                type="tel"
                placeholder="Phone"
                name="phone"
                defaultValue="0633155262"
                ref={register({
                  required: "Vous devez rentrer votre téléphone",
                })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formBasicPhone">
              <Form.Control
                type="text"
                placeholder="Adresse"
                name="adresse"
                defaultValue="33 rue du sergent beauchat"
                ref={register({ required: "Vous devez rentrer votre adresse" })}
              />
              {errors.phone && <span>{errors.adresse.message}</span>}
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                type="text"
                placeholder="Code postale"
                name="cdp"
                defaultValue="75012"
                ref={register({
                  required: "Vous devez rentrer votre code postale",
                })}
              />
              {errors.phone && <span>{errors.cdp.message}</span>}
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="formBasicPhone">
              <Form.Control
                type="text"
                placeholder="ville"
                name="city"
                defaultValue="Paris"
                ref={register({ required: "Vous devez rentrer votre ville" })}
              />
              {errors.phone && <span>{errors.city.message}</span>}
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
          {/* <div className=" downloadfile col-sm-9 formControls">
            <div>
              <label>Certificat Médical</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="certificatM"
                value={certificatM === "" && certificatM}
                onChange={handleChangeCertif}
              />
            </div>
            <div>
              <label>Photos d'Identité</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="photo"
                value={photo === "" && photo}
                onChange={handleChangePhoto}
              />
            </div>
            <div>
              <label>Autorisation Parentale</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="autorisation"
                value={autorisation === "" && autorisation}
                onChange={handleChangeAuthorisation}
              />
            </div>
            <div>
              <label>Assurance</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                data-rsfp-size="10485760"
                name="assurance"
                value={assurance === "" && assurance}
                onChange={handleChangeAssurace}
              />
            </div>
          </div> */}
          <br />
          <button variant="primary" type="submit">
            Envoyer
          </button>
        </Form>
      </div>
    </div>
  );
};

export default FormFicheInscription;
