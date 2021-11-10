import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import Dropdown from '../Dropdown/Dropdown';
import './Header.scss';
// import Dropdown from '../Dropdown/Dropdown';

function Header() {
    

    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <NavLink className="links" to="/" exact>
                        <img className="logo-image" src={logo} alt="Logo CSC" />
                    </NavLink>
                </div>
                <div>
                    <h2 className="phrase">A energia que mobiliza</h2>
                </div>
                <Dropdown />
            </header>
        </>
    )
}

export default Header;
