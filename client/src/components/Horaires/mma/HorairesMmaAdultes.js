import React from "react";
import titles from '../../../../src/titres.json';

const HorairesMmaAdultes = () => {
  return (
    <div>
      <p style={{ fontSize: 30 }}>{titles.titleMma}</p>

      <table className="mma">
        <thead>
          <tr>
            <th>MMA</th>
            <th className="mma-ados-adultes">Ados-Adultes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Lundi</td>
            <td className="mma-ados-adultes">20h00/22h00</td>
          </tr>

          <tr>
            <td>Mardi</td>

            <td className="mma-ados-adultes">20h00/22h00</td>
          </tr>

          <tr>
            <td>Jeudi</td>
            <td className="mma-ados-adultes">20h00/22h00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorairesMmaAdultes;
