import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
        <div className="header">
              <nav>
              <a href="/"><img src={logo} className="logo"/></a>
              <div className="links">
              <a href="/" className="projects">Projetos</a>
              <a href="/about" className="about">Sobre mim</a>
              <a href="" className="curriculum">Currículo</a>
              </div>
            </nav>
        </div>
    )
  }
}
