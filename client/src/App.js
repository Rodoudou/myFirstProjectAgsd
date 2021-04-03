import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./containers/notFound";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Inscription from "./containers/inscription";
import CertificatMedical from "./containers/certificat-medical";
import Horaires from "./containers/HorairesActivites";
// MMA
import HorairesMma from "./components/horaires-mma";
// Boxe
import HorairesBoxeKids from "./components/Horaires/boxe/HorairesBoxeKids";
import HorairesLadyBoxe from "./components/Horaires/boxe/HorairesLadyBoxe";
import HorairesBoxeMixte from "./components/Horaires/boxe/HorairesBoxeMixte";
// Judo/JJB
import HorairesJudoJjb from "./components/horaires-judo-jjb";
import HorairesJudoKids from "./components/Horaires/judo/HorairesJudoKids";
import HorairesJudoAdultes from "./components/Horaires/judo/HorairesJudoAdultes";
import HorairesMmaAdultes from "./components/Horaires/mma/HorairesMmaAdultes";
import HorairesMmaKids from "./components/Horaires/mma/HorairesMmaKids";

import FormFicheInscription from "./components/FormFicheInscription";
import HorairesJjbKids from "./components/Horaires/jjb/HorairesJjbKids";
import HorairesJjbAdultes from "./components/Horaires/jjb/HorairesJjbAdultes";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Tarifs from "./containers/tarifs";
import Cookies from "js-cookie";
import DarkModeToggle from "react-dark-mode-toggle";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faKey, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
// library.add(faCoffee, faKey,faMoon, faSun);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [user, setUser] = useState(Cookies.get("user") || "");
  const [isLog, setIsLog]=useState(false);
console.log("user in App.js", user);
const navigate = useNavigate();
// Se connecter
const onLogin = (token, user,) => {
  setToken(token);
  setUser(user);
  Cookies.set("userToken", token);
  Cookies.set("user", user);
};

//  Se déconnecter
const onLogout=()=>{
  setToken(null);
  Cookies.remove("userToken");
  Cookies.remove("user");
  navigate('/');
}

const Dark = () => {
  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <DarkModeToggle
      className="toggle"
      onChange={handleChange}
      checked={isDarkMode}
      size={50}
    />
  );
};
  return (
    <Layout
      onLogout={onLogout}
      setToken={setToken}
      token={token}
      user={user}
      setUser={setUser}
      Dark={Dark}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    >
      <Routes>
        <Route path="/" element={<Home isLog={isLog} setIsLog={setIsLog} />} />
        <Route
          path="login"
          element={
            <Login
              setUser={setUser}
              onLogin={onLogin}
              isLog={isLog}
              setIsLog={setIsLog}
            />
          }
        />
        <Route
          path="signup"
          element={
            <Signup
              onLogin={onLogin}
              token={token}
              setUser={setUser}
              user={user}
            />
          }
        />
        <Route path="contact" element={<Contact isDarkMode={isDarkMode} />} />
        <Route path="tarifs" element={<Tarifs isDarkMode={isDarkMode} />} />
        <Route
          path="inscription"
          element={<Inscription isDarkMode={isDarkMode} />}
        />
        <Route path="judo" element={<HorairesJudoJjb />} />
        <Route path="jjb" element={<HorairesJudoJjb />} />
        <Route path="mma" element={<HorairesMma />} />
        <Route path="horaires" element={<Horaires isDarkMode={isDarkMode} />} />
        <Route
          path="ficheinscription"
          element={<FormFicheInscription user={user} />}
        />

        {/* Judo/JJB */}
        <Route path="horaires/judo/kids" element={<HorairesJudoKids />} />
        <Route path="horaires/judo/adultes" element={<HorairesJudoAdultes />} />
        <Route path="horaires/jjb/kids" element={<HorairesJjbKids />} />
        <Route path="horaires/jjb/adultes" element={<HorairesJjbAdultes />} />
        {/* Boxe */}
        <Route path="horaires/boxe/mixt" element={<HorairesBoxeMixte />} />
        <Route path="horaires/boxe/lady" element={<HorairesLadyBoxe />} />
        <Route path="horaires/boxe/kids" element={<HorairesBoxeKids />} />
        {/* MMA */}
        <Route path="horaires/mma/adultes" element={<HorairesMmaAdultes />} />
        <Route path="horaires/mma/kids" element={<HorairesMmaKids />} />
        <Route path="certificat-medical" element={<CertificatMedical />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
