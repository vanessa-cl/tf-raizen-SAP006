import React, { useState } from "react";
import './Dropdown.scss';
import bell from '../../images/bell.png'

const Dropdown = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <nav className='dropdown-nav' >
            <img className="bell" src={bell} alt="bell" onClick={() => {
            openDropdown === false ?
                setOpenDropdown(true)
                : setOpenDropdown(false);
        }}/>
            <div className={`nav-links ${openDropdown === true ? ' show' : ''}`}>
                <button>Menu</button>
                <button>Cozinha</button>
                <button>Finalizados</button>
                <button>Logout</button>
            </div>
        </nav>
    );




}

export default Dropdown;

