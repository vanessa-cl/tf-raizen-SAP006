import { Link } from "react-router-dom"
import underconstruction from '../../images/underconstruction.png'
import Footer from "../Footer/Footer"
import './UnderConstruction.scss'

function UnderConstruction() {
    return (
        <>
        <main className="under-construction">
            <div className="items">
                <img classname="img" src={underconstruction} alt="Ilustração da Pagina em construção"/>
            </div>
            <div className="items">
                <h2 className="message">Esta página está em construção</h2>
                <Link to="/" className="link">
                    Voltar para a Pagina Inicial
                </Link>
            </div>
        </main>
            <Footer />
        </>
    )
} 

export default UnderConstruction
