import React from "react";
import titles from '../../../../src/titres.json';
import { Table } from "react-bootstrap";

const HorairesLadyBoxe = () => {
  return (
    <div>
    <p style={{fontSize:30}}>{titles.boxe.titleLadyBox}</p>
    <Table striped bordered hover>
        <thead>
          <tr>
 <th>Lady Boxing</th>
            <th className="eveil"> Ados/Adultes</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        <td>Mercredi</td>
          <td className="boxe-mixte">19h00/20h30</td>
        </tr>
        <tr>
          <td>Vendredi</td>
          <td className="boxe-mixte">19h00/20h30</td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HorairesLadyBoxe;
