import React from "react";

function HorairesMma() {
  return (
    <div>
      <table className="mma">
        <thead>
          <tr>
            <th>MMA</th>
            <th className="mma-kids">8-14 ans</th>
            <th></th>
            <th className="mma-ados-adultes">Ados-Adultes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Lundi</td>

            <td className="mma-kids">18h00/19h30</td>
            <td></td>
            <td className="mma-ados-adultes">20h00/22h00</td>
          </tr>

          <tr>
            <td>Mardi</td>
            <td></td>
            <td></td>
            <td className="mma-ados-adultes">20h00/22h00</td>
          </tr>

          <tr>
            <td>Mercredi</td>
            <td className="mma-kids">18h30/19h30</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Jeudi</td>
            <td></td>
            <td></td>
            <td className="mma-ados-adultes">20h00/22h00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HorairesMma;
