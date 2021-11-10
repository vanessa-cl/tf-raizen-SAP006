import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import gsap, {Power3} from 'gsap'
import SearchSection from '../../components/SearchSection/SearchSection';
import Footer from '../../components/Footer/Footer'
import './Home.scss'

import solititations from '../../images/1.png'
import newCall from '../../images/2.png'
import remote from '../../images/3.png'
import humanResources from '../../images/4.png'
import admSupport from '../../images/5.png'
import unblockUsers from '../../images/6.png'
import university from '../../images/7.png'
import workFlow from '../../images/8.png'
import busReservation from '../../images/9.png'

import busReservation2 from '../../images/11.png'
import contract from '../../images/12.png'
import reservation from '../../images/13.png'
import vacation from '../../images/14.png'

function Home() {
  let info = gsap.timeline()

  useEffect(() => {
    info.from('.info', {duration:1, y: 30, opacity:0})
  }, [])

    return (
      <>
         <main className="home-container">
            <section>
              <SearchSection />
            </section>
            <section className=""></section>
            <h1 className="title">Principais Serviços</h1>
            <section className="grid-container">       
              <div className="grid-items">
                <Link className="links" to="/mytickets">
                  <img className="link-img" src={solititations} alt="icon"/>     
                </Link>
                <p className="link-info">Minhas Solicitações</p>
              </div>   
              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={newCall} alt="icon"/>
                </Link>
                <p className="link-info">Novo Chamado</p>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={remote} alt="icon"/>
                </Link>
                <p className="link-info">Conexão Trabalho Remoto</p>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={humanResources} alt="icon"/>
                </Link>
                <p className="link-info">Portal do RH</p>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={admSupport} alt="icon"/>
                </Link>
                <p className="link-info">Protocolos do Suporte ADM</p>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={unblockUsers} alt="icon"/>
                </Link>
                <p className="link-info">Desbloqueio de Usuários</p>
              </div>

              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={university} alt="icon"/>
                </Link>
                <p className="link-info">Universidade Raízen</p>
              </div>

              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={workFlow} alt="icon"/>
                </Link>
                <p className="link-info">Fluxo de Trabalho</p>
              </div>  
              <div className="grid-items">
                <Link className="links" to="/">
                  <img className="link-img" src={busReservation} alt="icon"/>
                </Link>
                <p className="link-info">Reserva de Micro-ônibus</p>
              </div>
            </section>

            <h1 className="title">Favoritos</h1>
            <section className= "flex-container">
              <div className="boxes">
                <p className="link-info">Solicitação do Fretado</p>
                <Link className="links" to="">
                  <img className="link-img" src={busReservation2} alt="icon"/>     
                </Link>
              </div>
              <div className="boxes">
                <p className="link-info">Contrato</p>
                <Link className="links" to="/">
                  <img className="link-img" src={contract} alt="icon"/>     
                </Link>
              </div>
              <div className="boxes">
                <p className="link-info">Reserva de Lugar no Micro</p>
                <Link className="links" to="/">
                  <img className="link-img" src={reservation} alt="icon"/>     
                </Link>
              </div>
              <div className="boxes">
                <p className="link-info">Solicitação de Férias</p>
                <Link className="links" to="/">
                  <img className="link-img" src={vacation} alt="icon"/>     
                </Link>
              </div>
            </section>
            <Footer />
        </main>
      </>
    )
}

export default Home