import React from "react";
import titles from "./../../titres.json";
import { Link } from "react-router-dom";
import "../../App.css";
// import FacebookPage from "../../components/FacebookPage";

function Inscription({isDarkMode}) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="inscription-content">
          {/* <FacebookPage /> */}
          <div className="text-inscription">
            <h1 className={isDarkMode?"titleLightMode":null}>{titles.titleInscription}</h1>
            <p>
              Pour vous inscrire rien de plus simple, il vous suffit de
              télécharger et de remplir la feuille d’inscription et y joindre :
              <br/>
              1- Pour commencer nous vous demanderons de remplir le
              <Link to="/ficheinscription" style={{ fontSize: 16 }}>
                {" "}
                formulaire d’inscription
              </Link>{" "}
              et la{" "}
              <a href="http://www.agsd.fr/images/content/inscription/assurance.pdf">
                feuille d'assurance{" "}
              </a>
              au format PDF ou l’imprimer et l’apporter. (Le formulaire est
              également disponible à la salle, vous pouvez donc le remplir sur
              place).
              <br/>
              2- Pour finaliser l’inscription vous pouvez télécharger et vous
              munir du
              <Link style={{ fontSize: 16 }} to="/certificat-medical">
                {" "}
                certificat médical
              </Link>{" "}
              de non contre-indication « à la pratique du sport en compétition
              ».
              <br/>
              3- Un chèque à l’ordre de "Avant Garde Saint-Denis". Vous
              pouvez envoyer votreline-height dossier complet à l’adresse
              ci-dessous ou le remettre directement au bureau ( Avant Garde
              Saint-Denis , 4 av de Stalingrad, Saint-Denis 93200 ).
            </p>
            <br />
            <p style={{ fontWeight: "bold", color: "tomato" }}>
              Seuls les dossiers complets seront enregistrés.
            </p>
            <br />
            <p>
              Vous pourrez alors régler votre abonnement par carte bancaire,
              chèque ou espèces. Mais attention, aucune inscription ne sera
              acceptée par courrier ! Vous avez la possibilité de payer en
              plusieurs fois. L’ensemble des chèques doit être remis lors de
              l’inscription. Vous devez impérativement vous déplacer au
              secrétariat pour valider votre inscription.
              <br />
              Merci de votre compréhension.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
