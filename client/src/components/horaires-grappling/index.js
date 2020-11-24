import React from "react";

function HorairesGrappling() {
  return (
    <div>
      <table className="grappling">
        <thead>
          <tr>
            <th>Grappling/lutte</th>
            <th className="eveil"> Eveil 3-4 ans</th>
            <th></th>
            <th className="baby-presPoussin">5-7 ans</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mercredi</td>
            <td className="eveil">16h30/17h30</td>
            <td></td>
            <td className="baby-presPoussin">17h30/18h30</td>
          </tr>

          <tr>
            <td>Samedi</td>
            <td className="eveil">10h30/11h30</td>
            <td></td>
            <td className="baby-presPoussin">11h30/12h30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HorairesGrappling;
