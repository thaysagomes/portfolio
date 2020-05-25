import React, { Component } from 'react';
import './fem.scss';
import header from '../../../assets/fem-bg.svg';
import challenge from '../../../assets/fylodarkchallenge.jpg';

export default class Fem extends Component {
  render() {
    return (
      <div className="container-page">
        <img className="header-page" src={header} />
        <div className="content">

          <div className="intro">
            <div className="about">
              <h2 className="project-title">Frontend Mentor</h2>
              <p className="fem-description"><span>Frontend Mentor</span> é um site de desafios.
            Tem o objetivo de melhorar habilidades de front-end criando projetos reais, resolvendo desafios de HTML, CSS e JavaScript enquanto trabalha com projetos profissionais.</p>
            </div>
            <div className="fem-infos">
              <h3 className="section-title">Ferramentas</h3>
              <p className="fem-info">Visual Studio Code <span> • Desenvolvimento</span></p>
              <p className="fem-info">Github <span> • Controle de versão</span></p>
            </div>
          </div>

          <div className="process">

            <hr className="line" />
            <h3 className="challenge-title">Fylo dark theme landing page</h3>
            <p className="fem-label"><span className="html">HTML</span> <span className="css">CSS</span></p>
            <img className="challenge" src={challenge} />
            <div className="source">
              <a href="https://frontentmentor-fylodark.netlify.app/" target="_blank"><button className="website">Ver online</button></a>
              <a href="https://github.com/thaysagomes/frontendmentor-challenges/tree/master/fylo-dark-theme-landing-page-master" target="_blank"><button className="github">Ver código</button></a>
            </div>
            <hr className="line" />

          </div>

        </div>
      </div>
    );
  }
}
