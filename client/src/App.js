import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Routes} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./containers/notFound";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Inscription from "./containers/inscription";
import CertificatMedical from "./containers/certificat-medical";
import HorairesJudoJjb from "./components/horaires-judo-jjb";
import HorairesMma from "./components/horaires-mma";
import Boxe from "./components/horaires-boxe";

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
          <Route path="/boxe" element={<Boxe />} />
          <Route path="certificat-medical" element={<CertificatMedical />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
