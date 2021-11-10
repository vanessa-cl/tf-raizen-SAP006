import { useEffect, useState } from 'react';
import gsap, { Power3 } from 'gsap';
import './SearchSection.scss';

function SearchSection({searchText, setSearchText}) {
    
    function onChange(event) {
      const { value } = event.target;
      setSearchText(value);
    }

    let h1 = gsap.timeline();

    useEffect(() => {
      h1.from('.h1', { duration: 1, y: 30, opacity: 0 });
    }, []);


    return (
      <section >
            <h2 class="portal">Portal de Serviços</h2>
            <div  className="search-container">
              <div className="search">
                <h1 className="h1">Olá, Maria</h1>
                <h1 className="h1">Como podemos ajudar?</h1>

                <div class="barra-search"> 
                <input
                  type="text"
                  className="search-input"
                  placeholder="Digite para encontrar..."
                  value={searchText}
                  onChange={onChange}
                  
                /> 
                <i className="fas fa-search"></i>

                </div>
                </div>
            </div>
      </section>
    )
}

export default SearchSection;
