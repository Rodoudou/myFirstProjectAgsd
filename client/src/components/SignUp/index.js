import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser, onLogin }) => {
  const { register, handleSubmit, formState } = useForm({ mode: "onTouched" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("data du form =>", data);
    console.log("formState =>", formState);
    console.log("data.username =>", data.username);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("password2", data.password2);

    const result = data.username.match(/^[a-z0-9_-]{3,15}$/);
    // le pseudo doit etre composé de lettre entre  a-z ett de nombres de 0-9 avec une taille de 3-15 caracteres
    if (result === null) {
      alert("le username n'est pas valide");
      return;
    }

    // 1. Valider le formulaire
    // Vérifier les données sont corrects (password === password2)
    if (data.password === data.password2) {
      // 2. Appeler le serveur

      try {
        const response = await axios.post("/user/sign_up", formData);

        console.log(response.data);

        if (response.data.token) {
          const token = response.data.token;

          onLogin(token, response.data.account.username);

          // 3. Aller sur la page d'accueil
          navigate("/");
        }
      } catch (error) {
        alert("An error occurred");
        console.log("error.message = ", error);
      }
    }
  };

  return (
    <div className="signUp-content">
      <Form onSubmit={handleSubmit(onSubmit)} action="Post" type="submit">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Control
            type="text"
            placeholder="Pseudo"
            name="username"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Control
            type="tel"
            placeholder="Phone"
            name="tel"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Control
            type="password"
            placeholder="Confirme password"
            name="password2"
            ref={register}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
