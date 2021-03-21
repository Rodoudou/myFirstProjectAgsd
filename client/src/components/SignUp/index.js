import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser, onLogin }) => {
  const { register, handleSubmit, formState, errors, setError } = useForm({
    mode: "onTouched",
  });
  const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;

  console.log(
    `isSubmitted => ${isSubmitted}\n`,
    `isSubmitSuccessful => ${isSubmitSuccessful}`
  );

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = data;
    console.log("data du form =>", formData);
    console.log("formState =>", formState);
    console.log("errors form signup =>", errors);
    console.log("1");

    
    const result = formData.username.match(/^[a-z0-9_-]{3,15}$/);

    // le pseudo doit etre composé de lettre entre  a-z et de nombres de 0-9 avec une taille de 3-15 caracteres
    if (result === null) {
      alert("le username n'est pas valide");
      return;
    }

    // 1. Valider le formulaire
    // Vérifier les données sont corrects (password === password2)
    // debugger;
    if (formData.password === formData.password2) {
      console.log("2");
      
      // 2. Appeler le serveur
      try {
        console.log("3");
        const response = await axios.post("/signup", {formData});

        console.log("response in signup", response);

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
      <h1>Inscriptioon</h1>
      {isSubmitSuccessful && (
        <div className="alert alert-success">Merci pour votre inscription</div>
      )}
      <Form onSubmit={handleSubmit(onSubmit)} action="Post" type="submit">
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

        <Form.Group controlId="formBasicUsername">
          <Form.Control
            type="text"
            placeholder="Pseudo"
            name="username"
            defaultValue="aurelius75"
            ref={register({ required: "Vous devez rentrer un pseudo" })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Control
            type="tel"
            placeholder="Phone"
            name="phone"
            defaultValue="0633155262"
            ref={register({ required: "Vous devez rentrer votre téléphone" })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            defaultValue="aurele75"
            ref={register({ required: "Vous devez rentrer un mot de passe" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Control
            type="password"
            placeholder="Confirme password"
            name="password2"
            defaultValue="aurele75"
            ref={register({
              required: "Vous devez confirmer votre mot de passe",
            })}
          />
          {errors.password2 && <span>{errors.password2.message}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
