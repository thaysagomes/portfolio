import React, { Component } from 'react';
import './illustration.scss';
import illustration1 from '../../assets/illustration1.png';
import illustration2 from '../../assets/illustration2.png';
import illustration3 from '../../assets/illustration3.png';
import illustration4 from '../../assets/illustration4.png';

export default class Illustration extends Component {
  render() {
    return (
      <div className="container-page">
        <div className="content">

          <div className="intro">
            <div className="about">
              <h2 className="project-title">Ilustração</h2>
              <p className="fem-description">Estudo de ilustração de forma autodidata a partir do acompanhamento de tutoriais,
              como também vetorizando imagens.</p>
            </div>
            <div className="fem-infos">
              <h3 className="section-title">Ferramenta</h3>
              <p className="fem-info">Affinity Designer</p>
            </div>
          </div>

          <div className="process">

          <hr className="line" />
            <h3 className="challenge-title">Enjoy the Silence</h3>
            <img className="challenge" src={illustration4} />
            <p className="illustration-description">Vetorização de imagem e criação a partir de referências.</p>

            <hr className="line" />
            <h3 className="challenge-title">Basic Girl</h3>
            <img className="challenge" src={illustration1} />
            <p className="illustration-description">Vetorização de imagem.</p>
            <hr className="line" />

            <h3 className="challenge-title">Desk</h3>
            <img className="challenge" src={illustration2} />
            <p className="illustration-description">Inspiração da arte de  <a href="https://www.charlyclements.com/#/new-gallery-5/" target="_blank">Charly Clements</a>.</p>
            <hr className="line" />

            
            <h3 className="challenge-title">Shelves</h3>
            <img className="challenge" src={illustration3} />
            <p className="illustration-description">Acompanhamento de tutorial.</p>
            <hr className="line" />

          </div>

        </div>
      </div>
    );
  }
}
