import React, { useState } from "react";
import "./Dropdown.scss";
import bell from "../../images/bell.png";
import hamburger from "../../images/hamburger.png";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="dropdown-nav">
      <section className="menu">
        <img
          className="bell"
          src={bell}
          alt="bell"
          onClick={() => {
            openDropdown === false
              ? setOpenDropdown(true)
              : setOpenDropdown(false);
          }}
        />
       </section>
      <div className={`nav-links ${openDropdown === true ? " show" : ""}`}>
          <div class="bar"> 
            <p class="pendencies"> Notificações </p>
          </div>
          <p class="notifications"> Reserva de assento no micro-ônibus concluída com sucesso!</p>
      </div>
      <section className="menu">
        <img
          className="hamburger"
          src={hamburger}
          alt="menu hamburger"
          onClick={() => {
            openMenu === false
              ? setOpenMenu(true)
              : setOpenMenu(false);
          }}
        />
      </section>
      <div className={`menu-links ${openMenu === true ? " show" : ""}`}>
          <div class="menu-list"> 
            <ul>
              <li>
                <Link className="links" to="/">
                    Página Inicial
                </Link>
              </li>
              <li>
                <Link className="links" to="/mytickets">
                    Minhas Solicitações
                </Link>
              </li>
              <li>
                <Link className="links" to="/newTicket">
                    Novo Chamado
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Dropdown;
