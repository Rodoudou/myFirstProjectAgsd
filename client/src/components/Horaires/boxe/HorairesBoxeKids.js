import React from "react";
import titles from '../../../../src/titres.json';

const HorairesBoxeKids = () => {
  return (
    <div>
          <p style={{fontSize:30}}>{titles.boxe.titleMuayThaiKids}</p>
    <table>
      <thead>
        <tr>
          <th>Enfants</th>
          <th className="eveil"> 6-11 ans</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mercredi</td>
          <td className="boxe-kids">18h00/19h00</td>
        </tr>

        <tr>
          <td>Vendredi</td>
          <td className="boxe-kids">18h00/19h00</td>
        </tr>
      </tbody>
    </table>
    </div>

  );
};

export default HorairesBoxeKids;
