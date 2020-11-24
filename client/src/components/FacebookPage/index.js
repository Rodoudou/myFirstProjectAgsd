import React, { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
const FacebookPage = ({ handleClickFaceBook }) => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  const handleClickFaceBookids = () => {
    window.location = "https://www.facebook.com/agsdcombatenfants/";
  };
  return (
    <div className="pageFacebook">
      {isloading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">En chargement...</span>
        </Spinner>
      ) : (
        <>
          <div className="pageAdultes" style={{marginBottom:5}}>
            {/* <h3 onClick={handleClickFaceBook}>AGSD COMBAT</h3> */}
            <div
              className="fb-page"
              data-href="https://www.facebook.com/agsdcombat/"
              data-tabs="timeline"
              data-width=""
              data-height="130"
              data-small-header="false"
              data-adapt-container-width="false"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/agsdcombat/"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/agsdcombat/">
                  AGSD Combat Saint-Denis Judo Jiu-jitsu Bresilien Boxe Mixed
                  Martial Arts
                </a>
              </blockquote>
            </div>
          </div>

          <div className="pageEnfants">
            {/* <h3 onClick={handleClickFaceBookids}>AGSD COMBAT Enfants</h3> */}
            <div
              className="fb-page"
              data-href="https://www.facebook.com/agsdcombatenfants"
              data-tabs="timeline"
              data-width=""
              data-height="150"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/agsdcombatenfants"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/agsdcombatenfants">
                  AGSD Combat Enfants Saint Denis Judo Jiu Jitsu Bresilien
                </a>
              </blockquote>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FacebookPage;
