import React, { Component } from 'react';
import './footer.scss';
import frame from '../../assets/frame.svg';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import dribbble from '../../assets/dribbble.svg';
import instagram from '../../assets/instagram.svg';

export default class Footer extends Component {
  render() {
    return(
        <div>
          <img src={frame} className="frame"/>
            <div className="social">
                <a href="mailto:thaysacgms@gmail.com"  target="_blank"><img src={email}/></a>
                <a href="https://dribbble.com/tcgms"  target="_blank"><img src={dribbble}/></a>
                <a href="https://www.linkedin.com/in/tcgms/"  target="_blank"><img src={linkedin}/></a>
                <a href="https://www.instagram.com/estudandoux/"  target="_blank"><img src={instagram}/></a>
                <a href="https://github.com/thaysagomes"  target="_blank"><img src={github}/></a>
            </div>

            <div className="credits">
                <p>All work made with ❤ by Thaysa Gomes</p>
            </div>
        </div>
    )
  }
}
