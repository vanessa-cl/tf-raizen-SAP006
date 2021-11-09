import './SearchSection.scss'


function SearchSection() {
    return (
      <section className="wave-container">
           <div class="search">
                <h1 className="title">Olá, Maria</h1>
                <h1 className="title">Como podemos ajudar?</h1>
                <input 
                  type="text" 
                  className="search-input"
                  placeholder="Search"
                />
              </div>
      </section>
    )
}

export default SearchSection
