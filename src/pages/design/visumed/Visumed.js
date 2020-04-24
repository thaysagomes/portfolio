import React, { Component } from 'react';
import './visumed.scss';
import header from '../../../assets/visumed-bg.svg';

export default class Visumed extends Component {
  render() {
    return (
      <div className="container-page">
        <img className="header-page" src={header}/>
        <div className="content">

          <div className="intro">
            <div className="about">  
              <h2 className="project-title">Visumed</h2>
              <p className="section-description"><span>Este é um projeto que foi apresentado
                na 8ª edição da Campus Mobile, realizado pelo Instituto Claro. </span> 
                O aplicativo VISUMED visa possibilitar o acesso à bula por áudio, 
                a fim de facilitar uma tarefa cotidiana de um deficiente visual. 
                O usuário poderá escutar a bula apenas apontando a câmera do celular 
                para a caixa do medicamento e o aplicativo irá disponibilizá-la, ou obtê-la 
                apenas pesquisando convencionalmente.</p>
            </div>
            <div className="info">  
              <h3 className="section-title">Participantes</h3>
              <p className="section-info">Thaysa Gomes <span>• UX/UI Design</span></p>
              <p className="section-info">João Mouzinho <span>• Programação</span></p>
              <p className="section-info">Danillo Santos <span>• Pitch</span></p>

              <h3 className="section-title">Ferramenta</h3>
              <p className="section-info">Figma</p>
            </div>
          </div>
          <div className="process">

            <hr className="line"/>
            <h3 className="section-title">Questionamento</h3>
            <p className="process-info">Os deficientes visuais têm recursos acessíveis e 
            adequados para obter informações sobre a bula de medicamentos,<span> de forma autônoma</span>?</p>
            <hr className="line"/>

            <h3 className="section-title">Pesquisa</h3>
            <p className="process-info">Recursos disponíveis</p>
            <p className="process-info">Persona</p>
            <p className="process-info">Pain points?</p>
            <hr className="line"/>

            <h3 className="section-title">Prototipação</h3>
            <p className="process-info">Pensando na acessibilidade do público alvo, os elementos e o fluxo do protótipo
            foRAM inspirados em aplicativos bem estabelecidos no mercado como o Be My Eyes.</p>
            <hr className="line"/>

            <h3 className="section-title">Style guide</h3>
            <p className="process-info">UI Design</p>
            <hr className="line"/>

            <h3 className="section-title">Campus Mobile</h3>
            <p className="process-info">Aprofundamento no projeto e estratégias</p>
            <hr className="line"/>



          </div>

        </div>
      </div>
    );
  }
}
