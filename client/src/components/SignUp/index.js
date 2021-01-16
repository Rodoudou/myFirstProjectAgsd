import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = ({setUser, onLogin}) => {
  // les States
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = username.match(/^[a-z0-9_-]{3,15}$/); 
    // le pseudo doit etre composé de lettre entre  a-z ett de nombres de 0-9 avec une taille de 3-15 caracteres
    if (result === null) {
      alert("le username n'est pas valide");
      return;
    }

    // 1. Valider le formulaire
    // Vérifier les données sont corrects (password === password2)
    if (password === password2) {
      // 2. Appeler le serveur

      try {
        const response = await axios.post(
          "/user/sign_up",
          {
            username,
            email,
            phone,
            password
          }
        );

        console.log(response.data);

        if (response.data.token) {
          const token = response.data.token;

          onLogin(token, response.data.account.username);

         // 3. Aller sur la page d'accueil
         navigate('/')
        }
      } catch (error) {
        alert("An error occurred");
        console.log("error.message = ", error);
      }
    }
  };

  const HandleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const HandleChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const HandleChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const HandleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);

  };

  const HandleChangePassword2 = (e) => {
    const password = e.target.value;
    setPassword2(password);

  };
  return (
    <div className="signUp-content">
      
    <Form onSubmit={handleSubmit} action="Post" type="submit">
      <Form.Group onChange={HandleChangeEmail} controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group onChange={HandleChangeUsername} controlId="formBasicUsername">
        <Form.Control type="text" placeholder="Pseudo" />
      </Form.Group>

      <Form.Group onChange={HandleChangePhone} controlId="formBasicPhone">
        <Form.Control type="tel" placeholder="Phone" />
      </Form.Group>

      <Form.Group onChange={HandleChangePassword} controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group onChange={HandleChangePassword2} controlId="formBasicPassword2">
        <Form.Control type="password" placeholder="Confirme password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
    </div>
  );
};

export default SignUp;
