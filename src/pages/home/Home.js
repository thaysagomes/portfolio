import React, { Component } from 'react';
import './home.scss';
import visumed from '../../assets/visumed.svg';
import fem from '../../assets/fem.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">

          <a href="/design">
            <div className="container-child one">
              <img src={visumed} />
              <div className="overlay">
                <div className="description">
                  <h2>UI/UX Design</h2>
                  <p>Visumed App</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/coding">
            <div className="container-child two">
              <img src={fem} />
              <div className="overlay">
                <div className="description">
                  <h2>HTML/CSS</h2>
                  <p>Front-end mentor</p>
                </div>
              </div>
            </div>
          </a>

            <div className="container-child">
              <h2>container 3</h2>
            </div>
              <div className="container-child">
                <h2>container 4</h2>
              </div>

              <div className="container-child">
                <h2>container 5</h2>
              </div>
              <div className="container-child">
                <h2>container 6</h2>
              </div>
        </div>
      </div>  
    )
  }
}
