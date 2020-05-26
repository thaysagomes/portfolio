import React, { Component } from 'react';
import './visumed.scss';
import header from '../../../assets/visumed-bg.svg';
import info from '../../../assets/info.svg';
import visumedpersonas from '../../../assets/visumed-personas.svg';
import visumedonboarding from '../../../assets/visumed-onboarding.svg';
import visumedfunctionalities from '../../../assets/visumed-functionalities.svg';
import campus1 from '../../../assets/campus1.jpg';
import campus2 from '../../../assets/campus2.jpg';
import campus from '../../../assets/campus.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBraille, faQrcode, faPills} from '@fortawesome/free-solid-svg-icons'

export default class Visumed extends Component {
  render() {
    return (
      <div className="container-page">
        <img className="header-page" src={header}/>
        <div className="content">

          <div className="intro">
            <div className="about">  
              <h2 className="visumed-title">Visumed</h2>
              <p className="visumed-description"><span>Este é um projeto que foi apresentado
                na 8ª edição da Campus Mobile, realizado pelo Instituto Claro. </span> 
                O aplicativo VISUMED visa possibilitar o acesso à bula por áudio, 
                a fim de facilitar uma tarefa cotidiana de um deficiente visual. 
                O usuário poderá escutar a bula apenas apontando a câmera do celular 
                para a caixa do medicamento e o aplicativo irá disponibilizá-la, ou obtê-la 
                apenas pesquisando convencionalmente.</p>
            </div>
            <div className="info">  
              <h3 className="section-title">Participantes</h3>
              <p className="visumed-info">Thaysa Gomes <span>• UX/UI Design</span></p>
              <p className="visumed-info">João Mouzinho <span>• Programação</span></p>
              <p className="visumed-info">Danillo Santos <span>• Pitch</span></p>

              <h3 className="section-title">Ferramenta</h3>
              <p className="visumed-info">Figma</p>

              <h3 className="section-title">Duração do projeto</h3>
              <p className="visumed-info">1 mês</p>
            </div>
          </div>

          <div className="process">

            <hr className="line"/>
            <h3 className="section-title">Questionamento</h3>
            <p className="visumed-process">Os deficientes visuais têm recursos acessíveis e 
            adequados para obter informações sobre a bula de medicamentos,<span> de forma autônoma</span>?</p>
            <hr className="line"/>

            <h3 className="section-title">Pesquisa</h3>
            <p className="visumed-process">Primeiramente, buscamos quais são os recursos disponíveis direcionados para os
            deficientes visuais, que têm o objetivo de divulgar informações sobre medicamentos. Encontramos 3 fontes (<span>e o motivo delas 
            não suprirem a necessidade adequadamente</span>):</p>

            <FontAwesomeIcon className="icon" icon={faPills} />
            <p className="visumed-process section-title"><span>Bula especial</span></p>
            <p className="visumed-process">De acordo com a ANVISA, o deficiente visual poderá ter acesso à uma bula especial a partir 
            do contato com o Serviço de Atendimento ao Consumidor da empresa responsável pelo medicamento e esperar até dez dias úteis 
            para o recebimento da bula, podendo causar um potencial dano ao tratamento e saúde do paciente por não ser um documento facilmente acessível.</p>
            
            <FontAwesomeIcon className="icon" icon={faBraille} />
            <p className="visumed-process section-title"><span>Braille</span></p>
            <p className="visumed-process" className="process-info">Apesar das medidas tomadas pelos laboratórios em promover a acessibilidade a partir do braile nas embalagens, 
            percebe-se a ineficiência em resolver o real problema, visto que a maioria dos deficientes não sabem ler em Braille. 
            Em uma entrevista com deficientes visuais, realizada por Rebouças et al. (2016), foram encontradas as seguintes informações:</p>
            <img src={info} className="study"/>
            <p className="visumed-process">Uma das sugestões presentes no estudo, fornecidas para mitigar o problema, seria o acesso à <span>bula em áudio</span>.</p>
            <p className="source">Fonte: REBOUÇAS, Cristiana Brasil de Almeida et al. Evaluation of quality of life of visually impaired. Revista Brasileira de Enfermagem, v. 69, n. 1, p. 72-78, 2016.</p>
            
            <FontAwesomeIcon className="icon" icon={faQrcode} />
            <p className="visumed-process section-title"><span>QR Code</span></p>
            <p className="visumed-process">Também pode ser encontrado o QR Code nas embalagens dos medicamentos, <span>mas não em todos</span>. E assim como o Braille, não apresenta
            grande eficiência na acessibilidade.</p>
            <hr className="line"/>

            <h3 className="section-title">Personas</h3>
            <img className="personas" src={visumedpersonas}/>
            <hr className="line"/>

            <h3 className="section-title">Funcionalidades do aplicativo</h3>
            <p className="visumed-process functionality"><span>•</span> Reconhecimento de texto para identificação do medicamento;</p>
            <p className="visumed-process functionality"><span>•</span> Pesquisa por um medicamento, a partir da busca escrita ou por voz;</p>
            <p className="visumed-process functionality"><span>•</span> Encontrar farmácias próximas;</p>
            <p className="visumed-process functionality"><span>•</span> Marcar lembretes para tomar medicamentos.</p>
            <hr className="line1"/>

            <h3 className="section-title">Prototipação</h3>
            <p className="visumed-process">Pensando na acessibilidade do público alvo, os elementos e o fluxo do protótipo
              foram inspirados em aplicativos bem estabelecidos no mercado como o Be My Eyes.</p>
            <div className="prototype">
              <img className="onboarding" src={visumedonboarding}/>
              <p className="visumed-process">Onboarding do aplicativo, explicando como deve ser utilizado, juntamente com os botões de 
              cadastro ou login.</p>
            </div>
            <div className="prototype">
              <p className="visumed-process">Principais funcionalidades: tela de entrada onde se observa tudo o que é possível realizar no aplicativo;
              a tela de pesquisa do medicamento com a função de ouvir a bula; e por último, a de farmácias próximas, ordenadas pela menor distância 
              e com a possibilidade de ouvir a rota.</p>
              <img className="onboarding" src={visumedfunctionalities}/>
            </div>
            <hr className="line"/>

            <h3 className="section-title">Depoimentos</h3>
              <p className="visumed-process">Em uma ida ao Instituto de Cegos do Recife, coletamos depoimentos para entender melhor o potencial usuário do aplicativo.</p>
            <div className="iframe-container">
              <iframe className="responsive-iframe" src="https://player.vimeo.com/video/410603272" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <hr className="line1"/>

            <h3 className="section-title">Próximos passos</h3>
              <p className="visumed-process">Realizar testes de usabilidade para coletar os feedbacks sobre o desempenho dos usuários na realização das tarefas, a fim de refinar o protótipo. Em seguida, iterar sob o desenvolvimento do aplicativo e disponibilizá-lo gratuitamente (e inicialmente) na Play Store.</p>
            <hr className="line1"/>

            <h3 className="section-title">Campus Mobile</h3>
            <p className="visumed-process">A Campus foi um momento onde pudemos aprimorar nosso projeto com boas ideias, a partir da mentoria de especialistas
            no assunto. E principalmente, onde pudemos sermos ouvidos e onde colocamos nossa perspectiva para o mundo, buscando promover a qualidade de vida
            das pessoas por meio do design e da tecnologia.</p>
            <img className="onboarding" src={campus1}/>
            <img className="onboarding" src={campus2}/>
            <img className="onboarding" src={campus}/>
            <p>Obrigada. ❤</p>
            <hr className="line1"/>



          </div>

        </div>
      </div>
    );
  }
}
