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

        <a href="/visumed">
          <div className="project">
            <img src={visumed} />
            <div className="overlay">
              <div className="description">
                <h2 className="label">UX/UI Design</h2>
                <p>Visumed App</p>
              </div>
            </div>
          </div>
        </a>

        <a href="/mainhas">
          <div className="project">
            <img src={mainhas} />
            <div className="overlay">
              <div className="description">
                <h2 className="label">UX/UI Design</h2>
                <p>Mainhas App</p>
              </div>
            </div>
          </div>
        </a>
        <a href="/gama">
          <div className="project">
            <img src={gama} />
            <div className="overlay">
              <div className="description">
                <h2>UX/UI Design</h2>
                <p>Gama academy</p>
              </div>
            </div>
          </div>
        </a>

        <a href="/fem">
          <div className="project">
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
          <div className="project">
            <img src={frontloops} />
            <div className="overlay">
              <div className="description">
                <h2 className="label">Front-end</h2>
                <p>Frontloops</p>
              </div>
            </div>
          </div>
        </a>

        <a href="/illustration">
          <div className="project">
            <img src={illustration} />
            <div className="overlay">
              <div className="description">
                <h2 className="label">Ilustração</h2>
              </div>
            </div>
          </div>
        </a>

      </div>
    )
  }
}
