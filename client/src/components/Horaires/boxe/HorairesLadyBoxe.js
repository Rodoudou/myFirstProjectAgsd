import React from "react";
import titles from '../../../../src/titres.json';


const HorairesLadyBoxe = () => {
  return (
    <div>
    <p style={{fontSize:30}}>{titles.titleLadyBox}</p>

    <table>
        <thead>
          <tr>
            <th>Lady Boxing</th>
            <th className="eveil"> Ados/Adultes</th>
          </tr>
        </thead>
      <tbody>

        <tr>
          <td>Mercredi</td>
          <td className="boxe-lady">19h00/20h30</td>
        </tr>

        <tr>
          <td>Vendredi</td>
          <td className="boxe-lady">19h00/20h30</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default HorairesLadyBoxe;
