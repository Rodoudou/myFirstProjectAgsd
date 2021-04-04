import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ user, onLogin, isLog, setIsLog }) => {
  console.log("user in login",user);
  const { register, handleSubmit, formState } = useForm({ mode: "onTouched" });
  const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("data du formLogin =>", data);
    console.log("formState fromLogin =>", formState);

    
    try {
      const formData = data;
      const response = await axios.post("/login", formData);
      console.log("response",response);

      if (response.data.token) {
        onLogin(response.data.token, response.data.email);
        navigate("/");
        setIsLog(!isLog);
      } else {
        alert("Erreur sur le mot de passe ou mail");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-content">
      <Form onSubmit={handleSubmit(onSubmit)} action="Post" type="submit">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            defaultValue="aurele75@email.com"
            ref={register({ required: "Vous devez rentrer votre email" })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Control
            type="text"
            placeholder="Pseudo"
            name="username"
            defaultValue="aurelius75"
            ref={register({ required: "Vous devez rentrer un pseudo" })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            defaultValue="aurele75"
            ref={register({
              required: "Vous devez entrer votre mot de passe",
            })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default Login;
