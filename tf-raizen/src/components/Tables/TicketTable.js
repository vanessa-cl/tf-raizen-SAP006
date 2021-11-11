import { useState, useEffect } from 'react';
import './TicketTable.scss';
import data from './mock-data.json';

function TicketTable() {
  const [tableData, setTableData] = useState(data);

  // const [width, setWidth] = useState("");

  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return {
      width
    };
  }
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            {windowWidth.width > 470 ?
              <th>Número</th> :
              null
            }
            <th>Descrição</th>
            <th>Prazo de Atendimento</th>
            {windowWidth.width > 470 ?
              <th>Central</th> :
              null
            }
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr>
              {windowWidth.width > 470 ?
                <td>{data.numero}</td> :
                null
              }
              <td>{data.descrição}</td>
              <td>{data.prazo_de_atendimento}</td>
              {windowWidth.width > 470 ?
                <td>{data.central}</td> :
                null
              }
              <td >{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TicketTable;
