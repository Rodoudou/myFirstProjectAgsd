import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Routes} from "react-router-dom";
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

import DarkModeToggle from "react-dark-mode-toggle";
import FormFicheInscription from "./components/FormFicheInscription";
import HorairesJjbKids from "./components/Horaires/jjb/HorairesJjbKids";
import HorairesJjbAdultes from "./components/Horaires/jjb/HorairesJjbAdultes";
// import Signup from "./components/Signup";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faKey } from '@fortawesome/free-solid-svg-icons';
// library.add(faCoffee, faKey);


const App = () => {
    // STATES
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [planingShow, setPlaningShow] = useState(false);
    const [tarifShow, setTarifShow] = useState(false);
  
    const fermerModaleTarifs = () => {
      setTarifShow(true);
    };
  
    // The toggle Dark Mode component
    const Dark = () => {
      return (
        <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={60} />
      );
    };
  return (
    <Layout 
    isDarkMode={isDarkMode}
    planingShow={planingShow}
    setPlaningShow={setPlaningShow}
    tarifShow={tarifShow}
    setTarifShow={setTarifShow}
    Dark={Dark}
    fermerModaleTarifs={fermerModaleTarifs}

    >
      <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
          {/* <Route path="/signup" element={<Signup/>} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/judo" element={<HorairesJudoJjb />} />
          <Route path="/jjb" element={<HorairesJudoJjb />} />
          <Route path="/mma" element={<HorairesMma />} />
          <Route path="/horaires" element={<Horaires />}/>
          <Route path="/ficheinscription" element={<FormFicheInscription isDarkMode={isDarkMode} Dark={Dark}/>}/>

          {/* Judo/JJB */}
          <Route path="/horaires/judo/kids" element={<HorairesJudoKids/>}/>
          <Route path="/horaires/judo/adultes" element={<HorairesJudoAdultes/>}/>
          <Route path="/horaires/jjb/kids" element={<HorairesJjbKids/>}/>
          <Route path="/horaires/jjb/adultes" element={<HorairesJjbAdultes/>}/>
          {/* Boxe */}
          <Route path="/horaires/boxe/mixt" element={<HorairesBoxeMixte/>}/>
          <Route path="/horaires/boxe/lady" element={<HorairesLadyBoxe/>}/>
          <Route path="/horaires/boxe/kids" element={<HorairesBoxeKids/>}/>
          {/* MMA */}
          <Route path="/horaires/mma/adultes" element={<HorairesMmaAdultes/>}/>
          <Route path="/horaires/mma/kids" element={<HorairesMmaKids/>}/>
          <Route path="certificat-medical" element={<CertificatMedical />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
