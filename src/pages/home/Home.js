import React, { Component } from 'react';
import './home.scss';
import visumed from '../../assets/visumed.svg';
import mainhas from '../../assets/mainhas.svg';
import fem from '../../assets/fem.svg';
import illustration from '../../assets/illustration.svg';
import frontloops from '../../assets/frontloops.svg';
import gama from '../../assets/gama.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">

          <a href="/visumed">
            <div className="container-child design">
              <img src={visumed} />
              <div className="overlay">
                <div className="description">
                  <h2>UX/UI Design</h2>
                  <p>Visumed App</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/mainhas">
            <div className="container-child design">
              <img src={mainhas} />
              <div className="overlay">
                <div className="description">
                  <h2>UX/UI Design</h2>
                  <p>Mainhas App</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/gama">
            <div className="container-child design">
              <img src={gama} />
              <div className="overlay">
                <div className="description">
                  <h2>UX/UI Design</h2>
                  <p>Gama</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/fem">
            <div className="container-child coding">
              <img src={fem} />
              <div className="overlay">
                <div className="description">
                  <h2>Front-end</h2>
                  <p>Frontend mentor</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/frontloops">
            <div className="container-child frontloops">
              <img src={frontloops} />
              <div className="overlay">
                <div className="description">
                  <h2>Front-end</h2>
                  <p>Frontloops</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/illustration">
            <div className="container-child design">
              <img src={illustration} />
              <div className="overlay">
                <div className="description">
                  <h2>Ilustração</h2>
                </div>
              </div>
            </div>
          </a>

        </div>

      </div>  
    )
  }
}
