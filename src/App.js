import React, { useEffect, useState } from "react";
import "./css/search.css";
import "./css/style.css";
import ResultCard from "./components/ResultCard";
import robot from "./img/robot.svg";
import icon from "./img/Icone.png";

function App() {
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
              <form>
                <input
                  type="text"
                  className="search-input shadow"
                  placeholder="Ex: Programador..."
                  name=""
                />
                <button type="submit" href="#" className="search-icon shadow">
                  <i className="fas fa-search img-icon"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="box"><img class="rounded-circle" src={icon} />
              <h3 class="name">Vinko Vicenzo Tomljanovie</h3>
              <h6 class="city">Três Coroas / RS</h6>
              <p class="title">Programador / Python</p>
              <p class="description"><span>Atual: </span> Software Developer na Meta - utilizando Javascript, Typescript com react e node.js</p>
              <div class="social"><button class="btn btn-primary" type="submit"><a href="https://www.linkedin.com/in/vinko-vicenzo-tomljanovie-23b135230/" target=" ">PERFIL</a></button> <button type="button" class="btn btn-outline-danger">Não Verificado</button></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box"><img class="rounded-circle" src={icon} />
              <h3 class="name">Vinko Vicenzo Tomljanovie</h3>
              <h6 class="city">Três Coroas / RS</h6>
              <p class="title">Programador / Python</p>
              <p class="description"><span>Atual: </span> Software Developer na Meta - utilizando Javascript, Typescript com react e node.js</p>
              <div class="social"><button class="btn btn-primary" type="submit"><a href="https://www.linkedin.com/in/vinko-vicenzo-tomljanovie-23b135230/" target=" ">PERFIL</a></button> <button type="button" class="btn btn-outline-danger">Não Verificado</button></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box"><img class="rounded-circle" src={icon} />
              <h3 class="name">Vinko Vicenzo Tomljanovie</h3>
              <h6 class="city">Três Coroas / RS</h6>
              <p class="title">Programador / Python</p>
              <p class="description"><span>Atual: </span> Software Developer na Meta - utilizando Javascript, Typescript com react e node.js</p>
              <div class="social"><button class="btn btn-primary" type="submit"><a href="https://www.linkedin.com/in/vinko-vicenzo-tomljanovie-23b135230/" target=" ">PERFIL</a></button> <button type="button" class="btn btn-outline-danger">Não Verificado</button></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box"><img class="rounded-circle" src={icon} />
              <h3 class="name">Vinko Vicenzo Tomljanovie</h3>
              <h6 class="city">Três Coroas / RS</h6>
              <p class="title">Programador / Python</p>
              <p class="description"><span>Atual: </span> Software Developer na Meta - utilizando Javascript, Typescript com react e node.js</p>
              <div class="social"><button class="btn btn-primary" type="submit"><a href="https://www.linkedin.com/in/vinko-vicenzo-tomljanovie-23b135230/" target=" ">PERFIL</a></button> <button type="button" class="btn btn-outline-danger">Não Verificado</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
