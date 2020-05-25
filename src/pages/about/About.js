import React, { Component } from 'react';
import './about.scss';
import me from '../../assets/me.svg';

export default class About extends Component {
  render() {
    return (
      <div className="container-page">
        <div className="content">
          <div className="intro">
            <div className="about">
              <h2 className="about-title">Olá, meu nome é Thaysa Gomes.</h2>
              <p className="about-description">Sou formada em Ciências Biológicas pela Universidade Federal Rural de Pernambuco, mas atualmente sou estudante de Análise e Desenvolvimento de Sistemas no <span>Instituto
              Federal de Pernambuco</span>.</p>
              <p className="about-description"> Me considero bastante curiosa, e por isso, além de estudar sobre o desenvolvimento Front-end, me interesso por
              entender os processos do UX/UI Design e Ilustração, estudando de forma autodidata. </p>
              <p className="about-description last-paragraph">O principal propósito que move a minha vida profissional é saber que a partir do meu conhecimento técnico, posso ser capaz de <span>impactar
              positivamente a vida das pessoas e solucionar problemas</span>, de forma assertiva, simples e criativa. </p>
            </div>
            <div className="about-infos">
              <img src={me} className="img-about" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
