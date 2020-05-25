import React, { Component } from 'react';
import './gama.scss';
import header from '../../../assets/gama.png';
import landingpage from '../../../assets/landingpage.png';
import landingpage2 from '../../../assets/landingpage2.png';
import landing2 from '../../../assets/landing2.svg';
import modal from '../../../assets/modal.png';
import stories from '../../../assets/stories.svg';
import feed from '../../../assets/instagram-thatiana.png';
import lnkdin from '../../../assets/lnkdin.png';

export default class Gama extends Component {
  render() {
    return (
      <div className="container-page">
        <img className="header-page" src={header} />

        <div className="content">

          <div className="intro">
            <div className="about">
              <h2 className="project-title">Gama Experience</h2>
              <p className="gama-description">A <span>Gama Academy</span> é uma empresa de educação que prepara talentos para o mercado digital.
              Nela, existe o programa Gama Experience, onde os participantes trabalham em equipes desenvolvendo projetos e aperfeiçoando suas habilidades durante 5 semanas.</p>
            </div>
            <div className="gama-infos">
              <h3 className="section-title">Meu papel</h3>
              <p className="gama-info">UX/UI Designer</p>
            </div>
          </div>

          <div className="process">

            <hr className="line" />
            <h3 className="challenge-title">Show me the leads</h3>
            <p className="gama-description context">O objetivo da atividade foi produzir uma landing page oferecendo algum produto, a fim de captar <span>1.000</span> leads em uma semana, e tendo como alvo a mesma persona da empresa Airbnb.</p>
              <p className="challenge-title context">Landing Page</p>
            <img className="challenge" src={landingpage} alt="Landing Page"/>
            <img className="challenge" src={landingpage2} alt="Landing Page"/>
            <p className="gama-description context">Produzimos um e-book gratuito com dicas para viajar após a pandemia, e conseguimos captar <span>1049 leads</span>, ficando em 2º lugar. </p>
            <a href="https://www.figma.com/proto/yied2sXpNWPNeWOO7ELnxh/Gama-XP---Hermes?node-id=677%3A2&scaling=min-zoom" target="_blank"><p className="gama-description context"><span>Clique aqui para ler o relatório completo</span>.</p></a>
            <div className="source">
              <a href="https://viagensdoolimpo.netlify.app/" target="_blank"><button className="website">Ver online</button></a>
            </div>
            <hr className="line" />

            <h3 className="challenge-title">Show me the networking</h3>
            <p className="gama-description context">O desafio consistia na realização de um evento online cuja temática tenha relação com o momento do Brasil ou do mundo. O evento deveria contar com a presença de pelo menos 2 convidados para trazer algum conteúdo.</p>
              <p className="challenge-title context">Landing Page</p>
              <p className="gama-description context">Produzimos uma websérie que serviria para refletir sobre a nova perspectiva de humano que estamos desenvolvendo durante a pandemia, onde lidamos com transformações externas e internas.</p>
            <img className="challenge" src={landing2} alt="Landing Page"/>
            <p className="challenge-title context">Pop-up de saída</p>
            <img className="challenge" src={modal} alt="Modal"/>
            <p className="gama-description context">Conseguimos a participação de pessoas influentes como Thatiana Brasil, José Brito, Arnaldo Neto, Felipe Tonasso e Fernando Quevedo. Além de UX/UI, eu também fui responsável por criar peças gráficas para
            divulgação das entrevistas nas redes sociais: Instagram - feed e stories, LinkedIn e Facebook.</p>
            <img className="challenge" src={lnkdin} alt="LinkedIn"/>
            <img className="challenge" src={feed} alt="Instagram Feed"/>
            <img className="challenge" src={stories} alt="Stories"/>
            <p className="gama-description context">Obtivemos cerca de 570 visualizações e mais de 1000 pontos, ficando em 2º lugar.</p>
            <a href="https://www.figma.com/proto/hnpuYhmUX85JgbiVWzhbQQ/Novo-Humano-(Copy)?node-id=115%3A3&scaling=min-zoom" target="_blank"><p className="gama-description context"><span>Clique aqui para ler o relatório completo</span>.</p></a>
            <div className="source">
              <a href="https://www.onovohumano.com.br/" target="_blank"><button className="website">Ver online</button></a>
            </div>
            <hr className="line" />

          </div>
        </div>
      </div>
    );
  }
}
