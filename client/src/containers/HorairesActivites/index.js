import React from "react";
import MyCard from "../../components/MyCard"
import titles from '../../titres.json';

const Horaires = () => {

  return (
    <>
          <h1>{titles.horaires} </h1>
    <div className="myCard">
      <MyCard/>
    </div>

    </>
  );
};

export default Horaires;
