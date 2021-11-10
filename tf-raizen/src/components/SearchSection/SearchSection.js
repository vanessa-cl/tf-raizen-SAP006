
import './SearchSection.scss';

function SearchSection({searchText, setSearchText}) {

  function onChange(event) {
    const { value } = event.target;
    setSearchText(value);
  }

  return (
    <section className="wave-container">
      <div class="search">
        <h1 className="title">Olá, Maria</h1>
        <h1 className="title">Como podemos ajudar?</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

export default SearchSection;
