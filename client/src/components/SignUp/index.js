import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const SignUp = () => {
  // les States
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/user/sign_up", {
      email,
      username,
      phone,
      password
    });
    console.log("response sign_up", response);
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
  const HandleChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
   console.log(e.target.value)
  };

  const HandleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    // console.log(e.target.value)
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

      <Button variant="primary" type="submit">
        Enregistrer
      </Button>
    </Form>
    </div>
  );
};

export default SignUp;
