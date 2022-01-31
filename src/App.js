import React from 'react';
import './css/search.css';
import './css/style.css';

function App() {
  return (
    <div class="team-boxed">
        <div class="container">
            <div class="container-card">
                <div class="card p-4 mt-3">
                    <img class="img" src="./assets/img/robot.svg" width="32"/>
                    <h3 class="heading text-center">SEARCH.IN</h3>
                    <div class="introduction-text">
                        <h6 class="text">O bot que procura os candidatos perfeitos para você.
                        É só colocar as palavras chaves que vai filtrar e nosso bot vai procurar no LinkedIn 
                        os candidatos que possuem essas palavras em seus perfis e exibir para você.</h6>
                    </div>    	
                    <div class="search">
                        <input type="text" class="search-input" placeholder="Ex: Programador..." name=""> 
                            <button type="submit" href="#" class="search-icon"> 
                                <img src="./assets/img/search.svg" class="img-icon" /><h6 class="search-text">PESQUISAR</h6>
                            </button>
                        </input>
                    </div>
                </div>
            </div>
            <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box"><img class="rounded-circle" src="./assets/img/Icone.png"/>
                        <h3 class="name">Vinko Vicenzo Tomljanovie</h3>
                        <h6 class="city">Três Coroas / RS</h6>
                        <p class="title">Programador / Python</p>
                        <p class="description"><span>Atual: </span> Software Developer na Meta - utilizando Javascript, Typescript com react e node.js</p>
                        <div class="social"><button class="btn btn-primary" type="submit"><a href="https://www.linkedin.com/in/vinko-vicenzo-tomljanovie-23b135230/" target=" ">PERFIL</a></button> <button type="button" class="btn btn-outline-danger">Não Verificado</button></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box"><img class="rounded-circle" src="./assets/img/Icone.png"/>
                        <h3 class="name">Vinko Vicenzo Tomljanovie</h3>
                        <h6 class="city">Três Coroas / RS</h6>
                        <p class="title">Programador / Python</p>
                        <p class="description"><span>Atual: </span> Software Developer na Meta - utilizando Javascript, Typescript com react e node.js</p>
                        <div class="social"><button class="btn btn-primary" type="submit"><a href="https://www.linkedin.com/in/vinko-vicenzo-tomljanovie-23b135230/" target=" ">PERFIL</a></button> <button type="button" class="btn btn-outline-danger">Não Verificado</button></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box"><img class="rounded-circle" src="./assets/img/Icone.png"/>
                        <h3 class="name">Vinko Vicenzo Tomljanovie</h3>
                        <h6 class="city">Três Coroas / RS</h6>
                        <p class="title">Programador / Python</p>
                        <p class="description"><span>Atual: </span> Software Developer na Meta - utilizando Javascript, Typescript com react e node.js</p>
                        <div class="social"><button class="btn btn-primary" type="submit"><a href="https://www.linkedin.com/in/vinko-vicenzo-tomljanovie-23b135230/" target=" ">PERFIL</a></button> <button type="button" class="btn btn-outline-danger">Não Verificado</button></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box"><img class="rounded-circle" src="./assets/img/Icone.png"/>
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
