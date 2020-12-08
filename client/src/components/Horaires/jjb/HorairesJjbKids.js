import React from "react";
import titles from '../../../../src/titres.json';

const HorairesJjbKids = () => {
    return (
      <div>
         <p style={{fontSize:30}}>{titles.titleJjbKids}</p>

    <table>
      <thead>
        <tr>
          <th>JJB</th>
          <th className="eveil"> Eveil 3-4 ans</th>
          <th className="baby-presPoussin">5-7 ans</th>
          <th className="poussin-benjamin">8-11 ans</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lundi</td>
          <td></td>
          <td className="baby-presPoussin">17h30/18h30</td>
          <td className="poussin-benjamin">18h30/20h00</td>
        </tr>

        <tr>
          <td>Mardi</td>
          <td></td>
          <td className="baby-presPoussin">17h30/18h30</td>
          <td className="poussin-benjamin">18h30/20h00</td>
        </tr>

        <tr>
          <td>Mercredi</td>
          <td className="eveil">16h30/17h30</td>
          <td className="baby-presPoussin">17h30/18h30</td>
          <td></td>
        </tr>

        <tr>
          <td>Jeudi</td>
          <td></td>
          <td className="baby-presPoussin">17h45/18h45</td>
          <td className="poussin-benjamin">18h45/19h45</td>
        </tr>

        <tr>
          <td>Samedi</td>
          <td className="eveil">10h30/11h30</td>
          <td className="baby-presPoussin">11h30/12h30</td>
          <td></td>
        </tr>
      </tbody>
    </table>
         </div>
  );
};

export default HorairesJjbKids;
