import { useState } from 'react';
import './TicketTable.scss';
import data from './mock-data.json';

function TicketTable() {
  const [tableData, setTableData] = useState(data);

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Descrição</th>
            <th>Prazo de Atendimento</th>
            <th>Central</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr>
              <td>{data.numero}</td>
              <td>{data.descrição}</td>
              <td>{data.prazo_de_atendimento}</td>
              <td>{data.central}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TicketTable;
