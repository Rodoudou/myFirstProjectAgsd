import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";

function SocialMedias() {

  const handleClickFaceBook = () => {
    window.location = "https://www.facebook.com/agsdcombat";
  };

  const handleClickInstagram = () => {
    window.location = "https://www.instagram.com/agsdcombat";
  };

  const handleClickTwitter = () => {
    window.location = "https://twitter.com/CombatAgsd";
  };

  const handleClickYoutube = () => {
    window.location =
      "https://www.youtube.com/channel/UCDUTivMSGwXPmzMIGMwgWUA";
  };
    return (
        <div className="socialIcon" style={{ marginLeft: 90}}>
        <FontAwesomeIcon onClick={handleClickFaceBook} icon={faFacebook} />
        <FontAwesomeIcon onClick={handleClickInstagram} icon={faInstagram} />
        <FontAwesomeIcon onClick={handleClickTwitter} icon={faTwitter} />
        <FontAwesomeIcon onClick={handleClickYoutube} icon={faYoutube} />
      </div>
    )
}

export default SocialMedias
