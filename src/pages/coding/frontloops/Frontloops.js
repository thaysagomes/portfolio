import React, { Component } from 'react';
import './frontloops.scss';
import header from '../../../assets/frontloops-bg.svg';
import step2 from '../../../assets/Step2.png';
import step3 from '../../../assets/Step3.png';
import step4 from '../../../assets/Step4.png';

export default class Frontloops extends Component {
  render() {
    return (
      <div className="container-page">
        <img className="header-page" src={header} />
        <div className="content">

          <div className="intro">
            <div className="about">
              <h2 className="project-title">Frontloops</h2>
              <p className="frontloops-description"><span>Frontloops</span> é um site de desafios HTML e CSS, onde são fornecidos 30 desafios de interface da Web para resolver.</p>
            </div>
            <div className="frontloops-infos">
              <h3 className="section-title">Ferramentas</h3>
              <p className="frontloops-info">Visual Studio Code <span> • Desenvolvimento</span></p>
              <p className="frontloops-info">Github <span> • Controle de versão</span></p>
            </div>
          </div>

          <div className="process">

            <hr className="line" />
            <h3 className="challenge-title">Step 2</h3>
            <p className="fem-label"><span className="html">HTML</span> <span className="css">CSS</span></p>
            <img className="challenge" src={step2} />
            <div className="source">
              <a href="https://frontloopschallenge-step2.netlify.app/" target="_blank"><button className="website">Ver online</button></a>
              <a href="https://github.com/thaysagomes/frontloops-challenges/tree/master/Step%202" target="_blank"><button className="github">Ver código</button></a>
            </div>
            <hr className="line" />

            <h3 className="challenge-title">Step 3</h3>
            <p className="fem-label"><span className="html">HTML</span> <span className="css">CSS</span></p>
            <img className="challenge" src={step3} />
            <div className="source">
              <a href="https://frontloopschallenge-step3.netlify.app" target="_blank"><button className="website">Ver online</button></a>
              <a href="https://github.com/thaysagomes/frontloops-challenges/tree/master/Step%203" target="_blank"><button className="github">Ver código</button></a>
            </div>
            <hr className="line" />

            
            <h3 className="challenge-title">Step 4</h3>
            <p className="fem-label"><span className="html">HTML</span> <span className="css">CSS</span></p>
            <img className="challenge" src={step4} />
            <div className="source">
              <a href="https://frontloopschallenges-step4.netlify.app/" target="_blank"><button className="website">Ver online</button></a>
              <a href="https://github.com/thaysagomes/frontloops-challenges/tree/master/Step%204" target="_blank"><button className="github">Ver código</button></a>
            </div>
            <hr className="line" />

          </div>

        </div>
      </div>
    );
  }
}
