import { Link } from "react-router-dom"
import underconstruction from '../../images/underconstruction.png'
import Footer from "../Footer/Footer"

function UnderConstruction() {
    return (
        <main className="under-construction">
            <div className="items">
                <img src={underconstruction} alt="Ilustração da Pagina em construção"/>
            </div>
            <div className="items">
                <h2 className="message">Esta página está em construção</h2>
                <Link to="/" className="link">
                    Voltar para a Home
                </Link>
            </div>
            <Footer />
        </main>
    )
} 

export default UnderConstruction
