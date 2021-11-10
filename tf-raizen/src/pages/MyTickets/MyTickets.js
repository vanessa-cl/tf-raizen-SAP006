import {useEffect} from 'react'
import gsap, {Power3} from 'gsap'
import TicketTable from '../../components/Tables/TicketTable'
import Footer from '../../components/Footer/Footer';
import './MyTickets.scss'
import { Link } from 'react-router-dom';

function MyTickets() {
  let info = gsap.timeline()

  useEffect(() => {
    info.from('.info', {opacity: 0, ease: Power3.easeOut, delay: 0.2, y: 15}, 'Start')
  }, [])

    return (
      <>
        <main className="mytickets-container">
            <section>
              <h1 className="title">Minhas Solicitações</h1>
            </section>
            <section className="table">
                  <TicketTable />
            </section>
          <section className="link-container">
              <Link to="/" className="link">
                    Voltar para a Pagina Inicial
              </Link>
          </section>
          <section className="footer-myTicket">
            <Footer />
          </section>
        </main>
      </>
    )
}

export default MyTickets