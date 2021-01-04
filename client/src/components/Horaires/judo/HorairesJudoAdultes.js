import React from "react";
import titles from "../../../../src/titres.json";
import { Table } from "react-bootstrap";

const HorairesJudoAdultes = () => {
  return (
    <div className="title-horaire">
      <h1>{titles.judo.titleJudo}</h1>
      <Table striped bordered hover className="shadowTab">
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
      </Table>

    </div>
  );
};

export default HorairesJudoAdultes;
