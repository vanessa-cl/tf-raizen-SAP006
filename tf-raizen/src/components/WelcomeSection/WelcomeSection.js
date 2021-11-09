import './WelcomeSection.scss'
// import wave from '../../images/wave.png'


function WelcomeSection() {
    return (
      <section className="wave-container">
          {/* <div className="wave" style={{ backgroundImage: `url(${wave})` }}>
          </div> */}
           <div class="search">
                <h1>Como podemos ajudar?</h1>
                <input 
                  type="text" 
                  className="search-input"
                  placeholder="Search"
                />
              </div>
      </section>
    )
}

export default WelcomeSection
