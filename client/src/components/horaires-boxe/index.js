import React from "react";

function Boxe() {
  return (
    <div className="boxe-content">
      <table className="boxe">
        <thead>
          <tr>
            <th>Boxe Thaï</th>
            <th className="boxe-kids">6-12 ans</th>
            <th className="boxe-lady">Lady Boxing</th>
            <th className="boxe-mixte">Ados-Adultes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mercredi</td>
            <td className="boxe-kids">18h00/19h00</td>
            <td className="boxe-lady">19h00/20h30</td>
            <td className="boxe-mixte">20h30/22h15</td>
          </tr>

          <tr>
            <td>Vendredi</td>
            <td className="boxe-kids">18h00/19h00</td>
            <td className="boxe-lady">19h00/20h30</td>
            <td className="boxe-mixte">20h30/22h15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Boxe;
