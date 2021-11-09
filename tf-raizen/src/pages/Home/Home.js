import {useEffect} from 'react'
import gsap, {Power3} from 'gsap';
// import Title from '../../components/Title/Title'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import Footer from '../../components/Footer/Footer';
import './Home.scss'
import placeholder from '../../images/placeholder.png'

function Home() {
  let info = gsap.timeline()

  useEffect(() => {
    info.from('.info', {duration:1, y: 30, opacity:0})
  }, [])

    return (
      <>
         <main className="container">
            <section className="flex-items">
              <WelcomeSection />
            </section>
            <section className="flex-items">
              <div className="message-section">
                <div className="message">
                  <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                </div>   
                <div>
                  <img className="illustration" src={placeholder}/>
                </div>  
              </div>
              {/* <div class="search">
                <h1>Como podemos ajudar?</h1>
                <input 
                  type="text" 
                  className="search-input"
                  placeholder="Search"
                />
              </div> */}
            </section>

            <section className= "flex-container">
              <div className="boxes">
                Loren Ipsum
                <button>Loren</button>
              </div>
              <div className="boxes">
                Loren Ipsum
                <button>Loren</button>
              </div>
              <div className="boxes">
                Loren Ipsum
                <button>Loren</button>
              </div>
              <div className="boxes">
                Loren Ipsum
                <button>Loren</button>
              </div>
            </section>
          <Footer />
        </main>
      </>
    )
}

export default Home