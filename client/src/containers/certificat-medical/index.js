import React from "react";
import Certif from "../../assets/img/certif.jpg";
// import FacebookPage from "../../components/FacebookPage";

function CertificatMedical() {
  return (
    <div className="container">
      <div className="row">
        <div className="certif">
          {/* <FacebookPage /> */}
          <img src={Certif} alt="certificat medicale" />
        </div>
      </div>
    </div>
  );
}

export default CertificatMedical;
