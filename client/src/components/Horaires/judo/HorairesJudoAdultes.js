import React from "react";

const HorairesJudoAdultes = () => {
  return (
    <table>
    <thead>
        <tr>
          <th>Judo</th>
          <th className="eveil"> Ados/Adultes</th>
        </tr>
    </thead>

    <tbody>
      <tr>
        <td>Lundi</td>
        
        <td className="ados-adultes">20h00/22h00</td>
      </tr>

      <tr>
        <td>Mercredi</td>
        
        <td className="ados-adultes">20h00/22h00</td>
      </tr>

      <tr>
        <td>Jeudi</td>
        
        <td className="ados-adultes">19h45/21h45</td>
      </tr>
    </tbody>
    </table>
  );
};

export default HorairesJudoAdultes;
