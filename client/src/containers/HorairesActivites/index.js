import React from "react";
import MyCard from "../../components/MyCard"
import titles from '../../titres.json';

const Horaires = ({lightTheme,isDarkMode, lightMode}) => {
  // console.log("lightTheme =>",lightTheme);
  // console.log("ici gros =>", lightMode);

  return (
    <div className="horaire-cards-content">
          <h1 className={isDarkMode?"titleLightMode":null} >{titles.horaires} </h1>
    <div className="myCard">
      <MyCard/>
    </div>

    </div>
  );
};

export default Horaires;
