import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Tarifs() {
  return (
    <div className="container">
      <div className="row">
        <div className="tarifs-content">

          <Table className="tarifs">
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
                <td className="eveil"><Link to="/horaires/mma/kids">270€</Link></td>
                <td className="baby-presPoussin"><Link to="/horaires/mma/adultes"> 305€</Link></td>
              </tr>

              <tr>
                <td>Judo-JJB</td>
                <td className="eveil"><Link to="/horaires/judo/kids">270€</Link></td>
                <td className="baby-presPoussin"><Link to="/horaires/judo/adultes">305€</Link></td>
              </tr>

              <tr>
                <td>Grappling-Lutte</td>
                <td className="eveil">270€</td>
                <td>pas de cours pour le moment</td>
              </tr>

              <tr>
                <td>Boxe Thaï</td>
                <td className="eveil"><Link to="/horaires/boxe/kids">270€</Link></td>
                <td className="baby-presPoussin"><Link to="/horaires/boxe/mixt">305€</Link></td>
              </tr>

              <tr>
                <td>Lady Boxing</td>
                <td>pas de cours pour le moment</td>
                <td className="boxe-lady"><Link to="/horaires/boxe/lady">255€</Link></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Tarifs;
