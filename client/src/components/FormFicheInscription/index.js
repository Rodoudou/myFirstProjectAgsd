import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Checkbox, Row, Col } from "antd";
import { useInput } from "../../useInput";

const FormFicheInscription = ({ isDarkMode, user }) => {
  // les States
  const {
    state: {
      prenom,
      name,
      email,
      phone,
      sex,
      date,
      adresse,
      city,
      cdp,
      activities,
      droitImage,
      certificatM,
      photo,
      autorisation,
      assurance,
    },
    setState,
    bind,
    reset,
  } = useInput({
    prenom: "",
    name: "",
    email: "",
    sex: "",
    date: "",
    adresse: "",
    city: "",
    cdp: "",
    activities: [],
    droitImage: [],
    certificatM:[],
    photo:[],
    autorisation:[],
    assurance:[],
  });


  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("creator", user);
    formData.append("firstname", prenom);
    formData.append("lastname", name);
    formData.append("date", date);
    formData.append("sex", sex);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("adresse", adresse);
    formData.append("codePostal", cdp);
    formData.append("city", city);
    formData.append("activities", activities);
    formData.append("droitImage", droitImage);
    formData.append("certificatM", certificatM);
    formData.append("photo", photo);
    formData.append("autorisation", autorisation);
    formData.append("assurance", assurance);
    
    console.log("formData =>", formData);
    try {
      const response = await axios.post("/fiche-inscription", formData, {
        headers: {
          authorization: "Bearer " + Cookies.get("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      alert(JSON.stringify(response.data));

      // console.log("response.data", response.data);

      //   reset()
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
    setState(activityChecked);
    console.log("activityChecked = ", activityChecked);
  };

  const handleChangeDroitImage = (checkedValues) => {
    const droitImageChecked = checkedValues;
    if (checkedValues) {
      setState(!droitImage);
    }
    console.log("droitImageChecked = ", droitImageChecked);
  };

  const handleChangeCertif = (e) => {
    const newCertif = e.target.files;
    if (newCertif.length > 0) {
      setState(newCertif[0]);
    }
  };

  const handleChangePhoto = (e) => {
    const newPhoto = e.target.files;
    if (newPhoto.length > 0) {
      setState(newPhoto[0]);
    }
  };

  const handleChangeAuthorisation = (e) => {
    const newAutorisation = e.target.files;
    if (newAutorisation.length > 0) {
      setState(newAutorisation[0]);
    }
  };

  const handleChangeAssurace = (e) => {
    const newAssurance = e.target.files;
    if (newAssurance.length > 0) {
      setState(newAssurance[0]);
    }
  };

  return (
    <div className="formInscription">
      <div className="content">
        <p style={{ fontSize: "35px" }}> Formulaire d'inscription</p>
        {/* {isSubmitSuccessful && (
          <div className="alert alert-success">
            Merci pour votre inscription
          </div>
        )} */}

        <form
          className="ficheInscription"
          onSubmit={handleSubmit}
          type="submit"
        >
          <div>
            <div>
              <input type="text" name="name" value={name} {...bind} />
            </div>

            <div>
              <input type="text" name="prenom" value={prenom} {...bind} />
            </div>
          </div>
          <div>
            <div>
              <input type="date" name="date" value={date} {...bind} />
            </div>

            {/* <div id="formGroup-option" controlId="formBasicSex">
              <input as="select" name="sex" ref={register}>
                <option>Feminin</option>
                <option>Masculin</option>
              </input>
            </div> */}
          </div>

          <div>
            <div>
              <input type="email" name="email" value={email} {...bind} />
            </div>

            <div>
              <input type="tel" name="phone" value={phone} {...bind} />
            </div>
          </div>
          <div>
            <div>
              <input type="text" name="adresse" value={adresse} {...bind} />
            </div>

            <div>
              <input type="text" name="cdp" value={cdp} {...bind} />
            </div>
          </div>

          <div>
            <div>
              <input
                type="text"
                placeholder="Ville"
                name="city"
                value={city}
                {...bind}
              />
            </div>
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
            {/* <div>
              <label>Certificat Médical</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="certificatM"
                value={certificatM || ''}
                onChange={handleChangeCertif}
              />
            </div> */}
            {/* <div>
              <label>Photos d'Identité</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="photo"
                value={photo}
                onChange={handleChangePhoto}
              />
            </div> */}
            <div>
              <label>Autorisation Parentale</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                name="autorisation"
                value={autorisation}
                onChange={handleChangeAuthorisation}
              />
            </div>
            {/* <div>
              <label>Assurance</label>
              <input
                style={{ fontSize: 15 }}
                type="file"
                data-rsfp-size="10485760"
                name="assurance"
                value={assurance}
                onChange={handleChangeAssurace}
              />
            </div> */}
          </div>
          <br />
          <button variant="primary" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormFicheInscription;
