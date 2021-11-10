import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import Dropdown from '../Dropdown/Dropdown';
import './Header.scss';


function Header() {
    return (
        <>
            <header className="header">
                <div className="logo-container">
                <NavLink className="links" to="/" exact>
                    <img className="logo-image" src={logo} alt="Logo CSC"/>
                </NavLink>
                </div>
                <div>
                     <h2 className="portal-name">Energia que Mobiliza</h2>
                </div>
                <Dropdown />
            </header>
        </>
    )
}

export default Header;
