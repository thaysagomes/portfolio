import React, { Component } from 'react';
import './mainhas.scss';
import header from '../../../assets/mainhas-bg.svg';
import dado from '../../../assets/dado.svg';
import dado2 from '../../../assets/dado2.svg';
import mainhaspersona from '../../../assets/mainhas-personas.svg';
import mainhasonboarding from '../../../assets/mainhas-onboarding.svg';
import mainhasonboarding1 from '../../../assets/mainhas-onboarding1.svg';
import mainhasfunctionalities from '../../../assets/mainhas-functionalities.svg';
import mainhasfunctionalities1 from '../../../assets/mainhas-functionalities1.svg';
import hackathon from '../../../assets/hackathon.jpeg';
import hackathon1 from '../../../assets/hackathon1.jpeg';
import hackathon2 from '../../../assets/hackathon2.jpeg';

export default class Mainhas extends Component {
  render() {
    return (
      <div className="container-page">
        <img className="header-page" src={header}/>
      <div className="content">

        <div className="intro">
          <div className="about">  
            <h2 className="project-title">Mainhas</h2>
            <p className="mainhas-description"><span>Este é um projeto que foi apresentado
              no Rec'n'Play 2019, evento realizado pelo Porto Digital, no Hackathon Conexões Periféricas. </span> 
              Sabendo do grande desamparo que mães solo adolescentes e de baixa renda podem experienciar durante a maternidade, o aplicativo Mainhas tem o objetivo de as unir,
              possibilitando um espaço onde podem criar uma rede de apoio que possam oferecer e receber suporte emocional, compartilhar sentimentos, dificuldades
              e experiências.</p>
          </div>
          <div className="mainhas-infos">  
            <h3 className="section-title">Participantes</h3>
            <p className="mainhas-info">Thaysa Gomes <span>• UX/UI Design</span></p>
            <p className="mainhas-info">João Mouzinho <span>• Programação</span></p>
            <p className="mainhas-info">João Nascimento <span>• Programação</span></p>
            <p className="mainhas-info">Elane Oliveira <span>• Pitch</span></p>
            <p className="mainhas-info">Geovanna Domingos <span>• Pitch</span></p>

            <h3 className="section-title">Ferramenta</h3>
            <p className="mainhas-info">Figma</p>
            <h3 className="section-title duration-project">Duração do projeto</h3>
              <p className="visumed-info">2 dias</p>
          </div>
        </div>

        <div className="process">

          <hr className="line"/>
          <h3 className="section-title">Questionamento</h3>
          <p className="mainhas-process">Como podemos melhorar a experiência de mães solo de baixa renda, que mesmo desamparadas durante a maternidade, <span>continuem progredindo no seu desenvolvimento pessoal</span>?</p>
          <hr className="line"/>

          <h3 className="section-title">Pesquisa</h3>
          <p className="mainhas-process">A fim de entender o usuário de uma maneira rápida e efetiva, já que tínhamos pouco tempo durante a Hackathon, buscamos principalmente por máterias na internet e <span>descobrimos dados relevantes</span>:</p>

          <img src={dado} className="study"/>
          <p className="mainhas-process">A gravidez precoce também impacta a saúde física e mental, tendo consequências desvantajosas para o desenvolvimento de meninas de baixa renda.</p>
          <img src={dado2} className="study"/>
          <p className="source">Fonte: https://nacoesunidas.org/brasil-tem-setima-maior-taxa-de-gravidez-adolescente-da-america-do-sul/</p>
          <p className="mainhas-process">Além disso, reunimos alguns depoimentos de leitoras do Babycenter Brasil, onde compartilharam dificuldades que sentem ao criar seus filhos <span>sem a presença de um parceiro</span>:</p>
          <p className="mainhas-process"><span>"Acho que a maior dificuldade é ter de sustentar o filho sozinha e estar presente ao mesmo tempo. Equilibrar isso é muito complicado."</span></p>
          <p className="mainhas-process"><span>"A questão financeira é bem difícil. Ou você traz o dinheiro para casa ou você cria o filho presencialmente."</span></p>
          <p className="mainhas-process"><span>"Faz falta ter alguém para dar uma atenção a mais ao bebê sem ser você. Temos obrigações e rotinas a serem cumpridas que, com bebê junto, fica complicado de fazer."</span></p>
          <p className="source">Fonte: https://brasil.babycenter.com/a25011897/maiores-dificuldades-da-m%C3%A3e-solo</p>
          
          <p className="mainhas-process">Fizemos uma pesquisa qualitativa a partir do Google Forms para entender a vida das mães solo, e obtivemos 17 respostas. Dessa forma, a partir das informações coletadas, ficou muito mais claro para quais tipos de usuários direcionaríamos o projeto.</p>
          <hr className="line"/>

          <h3 className="section-title">Personas</h3>
          <img src={mainhaspersona} className="personas"/>
          <hr className="line1"/>

          <h3 className="section-title">Funcionalidades do aplicativo</h3>
          <p className="mainhas-process functionality"><span>•</span> Integração de mães solo, a partir de um feed de publicações;</p>
          <p className="mainhas-process functionality"><span>•</span> Um mapa interativo, onde podem conhecer mães solo próximas de onde estão;</p>
          <p className="mainhas-process functionality"><span>•</span> Encontrar creches;</p>
          <p className="mainhas-process functionality"><span>•</span> Conhecer iniciativas e informações sobre a Secretaria da Mulher que são oferecidas pela Prefeitura do Recife.</p>
          <hr className="line1"/>

          <h3 className="section-title">Prototipação</h3>
          <p className="mainhas-process">De início, achamos importante conter algumas definições antes da usuária entrar no aplicativo, para que todas estejam na mesma página quanto aos conceitos
            utilizados, como também para saber das funcionalidades disponíveis.</p>
          <img src={mainhasonboarding} className="onboarding"/>
          <img src={mainhasonboarding1} className="onboarding"/>
          <p className="mainhas-process">Principais funcionalidades: uma aba para o mapa, onde se observa as usuárias mais próximas para incentivar um contato, como também procurar por creches e ver suas avaliações;
            outra aba para interação geral, com postagens de outras mães e a possibilidade de realizar a sua própria publicação; e a última aba, onde é possível obter informações sobre as iniciativas da Prefeitura do Recife.</p>
          <img src={mainhasfunctionalities} className="onboarding"/>
          <img src={mainhasfunctionalities1} className="onboarding"/>

          <hr className="line"/>

          <h3 className="section-title">Hackathon - Conexões Periféricas</h3>
          <p className="mainhas-process">Foi meu primeiro projeto trabalhando com uma perspectiva centrada no UX design, visto que anteriormente, eu apenas gostava de fazer as telas bonitas de uma interface sem pensar nos importantes propósitos. Tivemos que
          fazer questionamentos para focar em uma ideia, coletamos dados para validar, criamos personas, prototipamos nossa solução, pensamos na melhor maneira de repassar as informações para o usuário, e tudo isso foi muito enriquecedor.</p>
          <img src={hackathon} className="study"/>
          <img src={hackathon2} className="study"/>
          <p className="mainhas-process">Eu tive que tirar foto dessa mesa, pois para mim, <span>mesa bagunçada = criatividade</span>. E isso vibra meu coração.</p>
          <img src={hackathon1} className="study"/>

          <p>Obrigada. ❤</p>
          <hr className="line1"/>



        </div>

      </div>
    </div>
    );
  }
}
