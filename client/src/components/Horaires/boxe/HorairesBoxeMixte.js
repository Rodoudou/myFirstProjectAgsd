import React from "react";
import titles from '../../../../src/titres.json';

const HorairesBoxeMixte = () => {
  return (
    <div>
       <p style={{fontSize:30}}>{titles.boxe.titleMuayThai}</p>

    <table>
      <thead>
        <tr>
          <th>Boxe</th>
          <th className="eveil"> Ados/Adultes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mercredi</td>
          <td className="boxe-mixte">20h30/22h15</td>
        </tr>
        <tr>
          <td>Vendredi</td>
          <td className="boxe-mixte">20h30/22h15</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default HorairesBoxeMixte;
