import React from "react";
// import FacebookPage from "../../components/FacebookPage";

function Tarifs() {
  return (
    <div className="container">
      <div className="row">
        <div className="tarifs-content">
          {/* <FacebookPage /> */}

          <table className="tarifs">
            <thead>
              <tr>
                <th>Tarifs</th>
                <th className="eveil"> Enfants</th>
                <th className="baby-presPoussin">Ados-Adultes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>MMA</td>
                <td className="eveil">270€</td>
                <td className="baby-presPoussin">305€</td>
              </tr>

              <tr>
                <td>Judo-JJB</td>
                <td className="eveil">270€</td>
                <td className="baby-presPoussin">305€</td>
              </tr>

              <tr>
                <td>Grappling-Lutte</td>
                <td className="eveil">270€</td>
                <td>pas de cours pour le moment</td>
              </tr>

              <tr>
                <td>Boxe Thaï</td>
                <td className="eveil">270€</td>
                <td className="baby-presPoussin">305€</td>
              </tr>

              <tr>
                <td>Lady Boxing</td>
                <td>pas de cours pour le moment</td>
                <td className="boxe-lady">255€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tarifs;
