import React, { Component } from 'react';
import './visumed.scss';
import visumed from '../../../assets/visumed.png';

export default class Visumed extends Component {
  render() {
    return (
      <div className="container-page">
        <div className="container-content">
            <div className="content">
              <img src={visumed}/>
              <p>xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx</p>
            </div>
        </div>
      </div>
    );
  }
}
