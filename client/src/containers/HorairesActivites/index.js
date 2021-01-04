import React from "react";
import MyCard from "../../components/MyCard"
import titles from '../../titres.json';

const Horaires = () => {

  return (
    <div className="horaire-cards-content">
          <h1>{titles.horaires} </h1>
    <div className="myCard">
      <MyCard/>
    </div>

    </div>
  );
};

export default Horaires;
