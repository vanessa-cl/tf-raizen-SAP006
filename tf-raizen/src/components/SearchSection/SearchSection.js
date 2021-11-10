import './SearchSection.scss'


function SearchSection() {
    return (
      <section>
            <h2 class="portal">Portal de Serviços</h2>
            <div  className="search-container">
              <div className="search">
                <h1 className="h1">Olá, Maria</h1>
                <h1 className="h1">Como podemos ajudar?</h1>
                <input 
                  type="text" 
                  className="search-input"
                  // placeholder="&#xF002; Search"
                  placeholder="Digite para encontrar..."
                />
                {/* <i className="fas fa-search"></i> */}
                </div>
            </div>
      </section>
    )
}

export default SearchSection
