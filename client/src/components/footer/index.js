import React from "react";
import FacebookPage from "../FacebookPage";
import SocialMedia from "../SocialMedias";

function Footer() {

  return (
    <footer>
    <div className="footer">
      <p>Create by Redouane Amrani with react</p>
     <SocialMedia/>
    </div>

    <FacebookPage/>
    </footer>
  );
}

export default Footer;
