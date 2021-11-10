import React, { useState } from "react";
import "./Dropdown.scss";
import bell from "../../images/bell.png";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="dropdown-nav">
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
      <div className={`nav-links ${openDropdown === true ? " show" : ""}`}>
          <div class="bar"> 
          <p class="pendencies"> Notificações </p></div>
        <p class="notifications"> Reserva de assento no micro-ônibus concluída com sucesso!</p>
            </div>
    </nav>
  );
};

export default Dropdown;
