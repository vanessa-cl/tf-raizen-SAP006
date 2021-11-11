import { Link } from "react-router-dom";
import './BackHome.scss'

function BackHome () {
    return (
        <section className="link-container">
              <Link to="/" className="link">
                    Voltar para a Pagina Inicial
              </Link>
          </section>

    );
}

export default BackHome