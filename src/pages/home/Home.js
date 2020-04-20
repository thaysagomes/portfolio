import React, { Component } from 'react';
import './home.scss';
import visumed from '../../assets/visumed.svg';
import fem from '../../assets/fem.svg';
import frontloops from '../../assets/frontloops.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">

          <a href="/design">
            <div className="container-child design">
              <img src={visumed} />
              <div className="overlay">
                <div className="description">
                  <h2>UI/UX Design</h2>
                  <p>Visumed App</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/design">
            <div className="container-child design">
              <img src={visumed} />
              <div className="overlay">
                <div className="description">
                  <h2>UI/UX Design</h2>
                  <p>Mainhas App</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/design">
            <div className="container-child design">
              <img src={visumed} />
              <div className="overlay">
                <div className="description">
                  <h2>UI/UX Design</h2>
                  <p>Filmow</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/coding">
            <div className="container-child coding">
              <img src={fem} />
              <div className="overlay">
                <div className="description">
                  <h2>HTML/CSS</h2>
                  <p>Front-end mentor</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/coding">
            <div className="container-child frontloops">
              <img src={frontloops} />
              <div className="overlay">
                <div className="description">
                  <h2>HTML/CSS</h2>
                  <p>Frontloops</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/design">
            <div className="container-child design">
              <img src={visumed} />
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
