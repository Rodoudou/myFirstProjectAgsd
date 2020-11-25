import React from "react";
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

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faKey } from '@fortawesome/free-solid-svg-icons';
// library.add(faCoffee, faKey);


const App = ({isDarkMode}) => {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/judo" element={<HorairesJudoJjb />} />
          <Route path="/jjb" element={<HorairesJudoJjb />} />
          <Route path="/mma" element={<HorairesMma />} />
          <Route path="/horaires" element={<Horaires />}/>

          {/* Judo/JJB */}
          <Route path="/horaires/judo/kids" element={<HorairesJudoKids/>}/>
          <Route path="/horaires/judo/adultes" element={<HorairesJudoAdultes/>}/>
          <Route path="/horaires/jjb/kids" element={<HorairesJudoKids/>}/>
          <Route path="/horaires/jjb/adultes" element={<HorairesJudoJjb/>}/>
          {/* Boxe */}
          <Route path="/horaires/boxe/mixt" element={<HorairesBoxeMixte/>}/>
          <Route path="/horaires/boxe/Lady" element={<HorairesLadyBoxe/>}/>
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
