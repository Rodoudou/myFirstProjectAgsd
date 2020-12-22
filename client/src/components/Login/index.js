import React,{useState} from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


const Login = () => {
  // les States
  // const [token, setToken] = useState(Cookies.get("token") || null);
  // const [username, setUsername] = useState(Cookies.get("username") || "");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
  // const history = useHistory();
  // const onLogin = (token, username) => {
  //   setToken(token);
  //   setUsername(username);
  //   Cookies.set("token", token);
  //   Cookies.set("username", username);
  // };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/user/log_in", {
        email: email,
        password: password
      });
      console.log("response.data in login", response.data);
      if (response.data.token) {
        // onLogin(response.data.token, response.data.account.username);
      //  history.push("/");
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
        Enregistrer
      </Button>
    </Form>

    </div>
  );
};

export default Login;
