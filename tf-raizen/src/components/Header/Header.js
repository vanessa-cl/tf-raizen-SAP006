import {NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'
import bell from '../../images/bell.png'
import './Header.scss'

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
                     <h2 className="phrase">A energia que mobiliza</h2>
                </div>
                <div className="links-container">
                    <NavLink className="links" to="/" exact>
                        <img className="bell" src={bell} alt="bell"/>
                    </NavLink>
                </div>
            </header>
        </>
    )
}

export default Header;
