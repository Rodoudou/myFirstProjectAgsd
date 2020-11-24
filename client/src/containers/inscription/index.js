import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
// import FacebookPage from "../../components/FacebookPage";

function Inscription() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="inscription">
            <div>
              {isLoading ? (
                <p>En chargement...</p>
              ) : (
                <div className="inscription-content">
                  {/* <FacebookPage /> */}
                  <div>
                    <h2>Comment s’abonner ?</h2>
                    <p>
                      Pour vous inscrire rien de plus simple, il vous suffit de
                      télécharger et de remplir la feuille d’inscription et y
                      joindre :
                    </p>
                    <p>
                      1- Pour commencer nous vous demanderons de remplir ou de
                      télécharger le
                      <a
                        style={{ fontSize: 16 }}
                        href="http://www.agsd.fr/images/content/inscription/preinscription.pdf"
                      >
                        {" "}
                        formulaire d’inscription
                      </a>{" "}
                      et la{" "}
                      <a href="http://www.agsd.fr/images/content/inscription/assurance.pdf">
                        feuille d'assurance{" "}
                      </a>
                      au format PDF ou l’imprimer et l’apporter. (Le formulaire
                      est également disponible à la salle, vous pouvez donc le
                      remplir sur place).
                    </p>
                    <p>
                      2- Pour finaliser l’inscription vous pouvez télécharger et
                      vous munir du
                      <Link style={{ fontSize: 16 }} to="/certificat-medical">
                        {" "}
                        certificat médical
                      </Link>{" "}
                      de non contre-indication « à la pratique du sport en
                      compétition ».
                    </p>
                    <p>3- Un chèque à l’ordre de "Avant Garde Saint-Denis".</p>
                    <p>
                      Vous pouvez envoyer votreline-height dossier complet à
                      l’adresse ci-dessous ou le remettre directement au bureau
                      ( Avant Garde Saint-Denis , 4 av de Stalingrad,
                      Saint-Denis 93200 ).
                    </p>
                    <br />

                    <p style={{ fontWeight: "bold", color: "tomato" }}>
                      Seuls les dossiers complets seront enregistrés.
                    </p>
                    <br />
                    <p>
                      Vous pourrez alors régler votre abonnement par carte
                      bancaire, chèque ou espèces.
                    </p>

                    <p>
                      Mais attention, aucune inscription ne sera acceptée par
                      courrier !
                    </p>

                    <p>Vous avez la possibilité de payer en plusieurs fois.</p>

                    <p>
                      L’ensemble des chèques doit être remis lors de
                      l’inscription.
                    </p>
                    <p>
                      Vous devez impérativement vous déplacer au secrétariat
                      pour valider votre inscription.
                    </p>

                    <p>Merci de votre compréhension.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
