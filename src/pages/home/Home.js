import React, { Component } from 'react';
import './home.scss';
import visumed from '../../assets/visumed.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
            <div className="container-child one">
              <img src={visumed} />
            </div>

            <div className="container-child two">
              <h2>container 2</h2>
            </div>

            <div className="container-child three">
              <h2>container 3</h2>
            </div>
              <div className="container-child four">
                <h2>container 4</h2>
              </div>

              <div className="container-child five">
                <h2>container 5</h2>
              </div>
              <div className="container-child six">
                <h2>container 6</h2>
              </div>
        </div>
      </div>  
    )
  }
}
