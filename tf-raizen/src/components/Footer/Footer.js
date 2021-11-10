import './Footer.scss'
import logos from "../../images/logos-empresas.png"


function Footer() {
    return (
        <footer className="footer">
            <div class="links-raizen">
                <img src={logos} className="logo-empresas" alt="logo" />
            </div>
        </footer>
    )
}

export default Footer
