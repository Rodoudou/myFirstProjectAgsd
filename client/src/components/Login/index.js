import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


const Login = ({onLogin,isLog,setIsLog}) => {

  // les States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/log_in", {
        email: email,
        password: password
      });
   
      if (response.data.token) {
      onLogin(response.data.token, response.data.account.username);
      navigate('/');
      setIsLog(!isLog);
      }else{
           alert("Erreur sur le mot de passe ou mail");
      }
    } catch (error) {
      console.log(error.message);
   
    }
  };

  const HandleChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  console.log(e.target.value)
  };

  const HandleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    // console.log(e.target.value)
  };
  return (
    <div className="login-content">
    <Form onSubmit={handleSubmit} action="Post" type="submit">
      <Form.Group onChange={HandleChangeEmail} controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group onChange={HandleChangePassword} controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>

    </div>
  );
};

export default Login;
