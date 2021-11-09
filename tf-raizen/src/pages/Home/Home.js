import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import gsap, {Power3} from 'gsap'
import SearchSection from '../../components/SearchSection/SearchSection';
import Footer from '../../components/Footer/Footer'
import './Home.scss';

function Home() {
  let info = gsap.timeline()

  useEffect(() => {
    info.from('.info', {duration:1, y: 30, opacity:0})
  }, [])

    return (
      <>
         <main className="home-container">
            <section>
              <SearchSection />
            </section>

            <section className="grid-container">
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>   
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>  
              <div className="grid-items">
                <Link className="links" to="/">
                  <img src="" alt="icon"/>
                </Link>
              </div>
            </section>

            <section className= "flex-container">
              <div className="boxes">
                <Link to="/newticket">Abrir chamado</Link>
                Loren Ipsum
              </div>
              <div className="boxes">
                <button>Loren</button>
                Loren Ipsum
              </div>
              <div className="boxes">
                <button>Loren</button>
                Loren Ipsum
              </div>
              <div className="boxes">
                <button>Loren</button>
                Loren Ipsum
              </div>
            </section>
            <Footer />
        </main>
      </>
    )
}

export default Home