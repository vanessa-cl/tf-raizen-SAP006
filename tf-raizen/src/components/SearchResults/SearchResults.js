import React from 'react'
import './SearchResults.scss'

function SearchResults({text}) {
  if('holerite'.includes(text)) {
    return (
      <div className="search-results">
        <p>Sua pesquisa retornou os seguintes resultados:</p>
        <ul>
          <li>
            Solicitar holerite
          </li>
          <li>
            Reportar inconsistência no holerite
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="search-results">
        <p>Desculpe, sua pesquisa não encontrou nenhum resultado.</p>
        <ul>
          <li>
          Verifique se todas as palavras estão escritas corretamente;
          </li>
          <li>
          Use palavras-chaves diferentes
          </li>
          <li>
          Use palavras-chaves mais genéricas
          </li>
        </ul>
        <p>Não encontrou nenhum resultado? <br/>
          Fale com nossa assistente Bia, ou <a href="/newticket">abra um chamado</a>.</p>
      </div>
  )
}

export default SearchResults
