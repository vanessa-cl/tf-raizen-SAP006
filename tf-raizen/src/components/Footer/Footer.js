import './Footer.scss'
import cosan from "./img/icon-logo-cosan.png"
import raizen from "./img/icon-logo-raizen.png"

import comgas from "./img/icon-logo-comgas.png"
import compass from "./img/icon-logo-compass.png"
import moove from "./img/icon-logo-moove.png"
import rumo from "./img/icon-logo-rumo.png"

function Footer() {
    return (
        <footer className="footer">

            <div class="links-raizen">
            <a target="_blank" class="links" href="https://www.cosan.com.br/" title="Cosan">
            <img src={cosan} className="logo-empresas" alt="logo" /> </a>

            <a target="_blank" class="links" href="https://www.raizen.com.br/" title="Raízen">
            <img src={raizen} className="logo-empresas" alt="logo" />
            <i class="icon-logo-raizen"> </i></a>

            <a target="_blank" class="links" href="https://virtual.comgas.com.br/">
            <img src={comgas} className="logo-empresas" alt="logo" /></a>

            <a target="_blank" class="links" href="https://www.compassbr.com/" title="Compass">
            <img src={compass} className="logo-empresas" alt="logo" /></a>

            <a target="_blank" class="links" href="https://www.cosan.com.br/moove/" title="Moove">
            <img src={moove} className="logo-empresas" alt="logo" /></a>

            <a target="_blank" class="links" href="https://rumolog.com/" title="Rumo">
            <img src={rumo} className="logo-empresas" alt="logo" /></a>

            </div>

        </footer>
    )
}

export default Footer
