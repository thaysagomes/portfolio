import React, { Component } from 'react';
import './footer.scss';
import frame from '../../assets/frame.svg';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import dribbble from '../../assets/dribbble.svg';


export default class Footer extends Component {
  render() {
    return(
        <div>
          <img src={frame} className="frame"/>
            <div className="social">
                <a href="mailto:thaysacgms@gmail.com"  target="_blank"><img src={email} className="disabled"/></a>
                <a href="https://dribbble.com/tcgms"  target="_blank"><img src={dribbble} className="disabled"/></a>
                <a href="https://www.linkedin.com/in/tcgms/"  target="_blank"><img src={linkedin} className="disabled" /></a>
                <a href="https://github.com/thaysacgms"  target="_blank"><img src={github} className="disabled" /></a>
            </div>

            <div className="credits">
                <p>All work made with ❤ by Thaysa Gomes</p>
            </div>
        </div>
    )
  }
}
