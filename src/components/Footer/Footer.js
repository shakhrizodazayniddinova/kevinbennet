import React, { Component } from 'react';
import "./Footer.css"
import Theme from '../../Theme/Theme';

class Footer extends Component {
  render() {
    return (
      <Theme.Consumer>
        {({theme}) => {
          return(
            <div className={theme}>
              <div className='footerDiv d-flex flex-column'>
                <div className="footCard theme-secondary align-self-center">
                    <h4>Come say ‘hello’  👋  we’d really to talk about your project!</h4>
                    <button className="primaryBtn btn btn-outline-primary bg-white mt-4 py-2 px-4 rounded-pill">Email us</button>
                    <button className="primaryBtn btn btn-outline-primary bg-white ms-3 mt-4 py-2 px-4 rounded-pill">@  us on Twitter</button>
                </div>
                <div className='textFoot d-flex flex-column '>
                    <p className='p-0 my-3'>This is a line to foot the page.</p>
                    <p>© Your name or brand 2020</p>
                </div>
              </div>
            </div>
          )
        }}
      </Theme.Consumer>
    )
  }
}

export default Footer