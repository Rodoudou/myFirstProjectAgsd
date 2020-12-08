import React from 'react'
import titles from '../../../../src/titres.json';
import { Table } from "react-bootstrap";

const HorairesMmaKids = () => {
    return (
      <div>
      <p style={{ fontSize: 30 }}>{titles.mma.titleMma}</p>
      
        <Table striped bordered hover  className="mma">
        <thead>
          <tr>
            <th>MMA</th>
            <th className="mma-ados-adultes">Enfants/Ados</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Lundi</td>
            <td className="mma-ados-adultes">18h00/19h30</td>
          </tr>


          <tr>
            <td>Mercredi</td>
            <td className="mma-ados-adultes">18h30/22h00</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
}

export default HorairesMmaKids
