import React, { useEffect, useState } from "react";
import "./css/search.css";
import "./css/style.css";
import ResultCard from "./components/ResultCard";
import robot from "./img/robot.svg";
import search from "./img/search.svg";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [resultList, setResultList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    /*const API_URL =
      `https://lighthouse-dev-scraper.herokuapp.com/search?query=Dev%20node&numberOfPages=1&token=1dd460adea70527ba66b4abb8ffabbe661409f20`;
    fetch(API_URL).then((response) => {
      return response.json().then((json) => {
        console.log(json);
      });
    });*/
  }, []);
  function sendData(e) {
    setIsLoading(true);
    e.preventDefault();
    const API_URL = `https://lighthouse-dev-scraper.herokuapp.com/search?query=${encodeURI(
      inputSearch
    )}&numberOfPages=1&token=1dd460adea70527ba66b4abb8ffabbe661409f20`;
    fetch(API_URL).then((response) => {
      return response.json().then((json) => {
        setResultList(json);
        setIsLoading(false);
      });
    });
  }
  return (
    <div className="team-boxed">
      <div className="container">
        <div className="container-card">
          <div className="card p-4 mt-3">
            <img className="img" src={robot} width="32" />
            <h3 className="heading text-center">SEARCH.IN</h3>
            <div className="introduction-text">
              <h6 className="text">
                O bot que procura os candidatos perfeitos para você. É só
                colocar as palavras chaves que vai filtrar e nosso bot vai
                procurar no LinkedIn os candidatos que possuem essas palavras em
                seus perfis e exibir para você.
              </h6>
            </div>
            <div className="search">
              <form onSubmit={sendData}>
                <input
                  type="text"
                  className="search-input shadow"
                  placeholder="Ex: Programador..."
                  name=""
                  value={inputSearch}
                  onChange={(e) => setInputSearch(e.target.value)}
                />
                <button type="submit" href="#" className="search-icon shadow">
                  <i class="fas fa-search img-icon"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row people">
          {" "}
          {isLoading ? (
            <div class="d-flex justify-content-center contain-spinner">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            resultList.map((props, index) => {
              return <ResultCard key={index} {...props} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
