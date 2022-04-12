import React, { useEffect, useState } from "react";
import "./css/search.css";
import "./css/style.css";
import ResultCard from "./components/ResultCard";
import robot from "./img/robot.svg";
import icon from "./img/Icone.png";
import {BsBuilding} from "react-icons/bs";
import {BsListCheck} from "react-icons/bs";

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
          <div class="item pb-4">
            <div class="perfil pt-4 pl-4 pr-4">
              <img class="rounded-circle" src={icon}></img>
              <h1 class="mt-2">Vinko Vincenzo</h1>
              <p>PhD Student | PUCRS/UNIGE, Professor de Graduação na FACCAT, Coordenadora dos Projetos Panvel-Faccat e Faccat+Lighthouse</p>
              <p>Taquara - RS - Brasil</p>
            </div>
            <div class="interesting-items pt-4 pb-4 pl-5 pr-3">
              <div class="company-items pt-3">
                <div class="pl-3 pr-3"><BsBuilding class="icon"></BsBuilding></div>
                <div class="text-company pb-3">
                  <div class="company">
                    <h1>Omega Automação e Sistemas</h1>
                    <p>Software Developer</p>
                    <p>set. de 2016 - o momento</p>
                  </div>
                  <div class="company">
                    <h1>Escola Técnica Estadual Monteiro Lobato</h1>
                    <p>Professor Técnico</p>
                    <p>jun. de 2012 - ago. de 2021</p>
                  </div>
                  <div class="company">
                    <h1>Meta </h1>
                    <p>Software Developer</p>
                    <p>abr. de 2021 - o momento</p>
                  </div>
                </div>
              </div>
            </div>
              <div class="interesting-items pt-4 pb-4 pl-5 pr-3">
                  <div class="company-items pt-3">
                  <div class="pl-3 pr-3"><BsListCheck class="icon"></BsListCheck></div>
                  <div class="applications pb-4">
                    <h1>Mobile device management</h1>
                    <h1>Full Stack Developer</h1>
                    <h1>Program Management</h1>
                    <h1>React.js</h1>
                    <h1>Desenvolvimento de software personalizado</h1>
                    <h1>Management...</h1>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
