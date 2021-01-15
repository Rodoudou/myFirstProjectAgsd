import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";

const SignUp = ({navigate,onLogout,setUser}) => {
  // les States
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = username.match(/^[a-z0-9_-]{3,15}$/);
    if(result === null){
      alert('Le pseudo n\'est pas valide');
      return;
    }

    // 1- Valider le form
    // Vérifier si les données sont corrects (password1 === password2)
    if(password === password2){
      // appeler le serveur
      try {
        const response = await axios.post('/user/sign_up',
        {
          email,
          username,
          password: password
        }
        );
        console.log("response.data in /user/sign_up ",response.data);
        if(response.data.token){
          const token = response.data.token;
          // 1- Sauvegarder le token dans les cookies
          Cookies.set("userToken", token, {expires: 2000});
          // 2- Remplacer le bouton "Seconnecter" par "Se déconnecter"
          setUser({
            token: token
          });
  
           // 3. Aller sur la page d'accueil
           navigate('/');
        }


      } catch (error) {
        
      }
    }
  
  };

  const HandleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  console.log(e.target.value)
  };
  const HandleChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
   console.log(e.target.value)
  };

  const HandleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    // console.log(e.target.value)
  };

  const HandleChangePassword2 = (e) => {
    const password2 = e.target.value;
    setPassword2(password2);
    // console.log(e.target.value)
  };
  return (
    <Form onSubmit={handleSubmit} action="Post" type="submit">
      <Form.Group onChange={HandleChangeEmail} controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group onChange={HandleChangeUsername} controlId="formBasicUsername">
        <Form.Control type="text" placeholder="Pseudo" />
      </Form.Group>


      <Form.Group onChange={HandleChangePassword} controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group onChange={HandleChangePassword2} controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enregistrer
      </Button>
    </Form>
  );
};

export default SignUp;
