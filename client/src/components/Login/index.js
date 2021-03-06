import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";


const Login = ({onLogin,isLog,setIsLog}) => {
  const {
    register,
    handleSubmit,
    formState
  } = useForm({ mode: "onTouched" });
  const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;


  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("data du formLogin =>", data);
    console.log("formState fromLogin =>", formState);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      const response = await axios.post("/user/log_in", formData);
   
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

  return (
    <div className="login-content">
    <Form  onSubmit={handleSubmit(onSubmit)} action="Post" type="submit">
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" name="email"ref={register}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password"ref={register}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>

    </div>
  );
};

export default Login;
