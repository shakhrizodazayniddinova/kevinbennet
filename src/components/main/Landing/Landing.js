import React, { Component } from 'react';
import "./Landing.css";

import Theme from '../../../Theme/Theme';

export class Landing extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Theme.Consumer>
          {({theme}) => {
            const darkThemetext = theme === "dark" ? "text-white" : "text-primary";
            const darkThemebg = theme === "dark" ? "bg-white" : "bg-primary";

            return(
              <div className={`landing ${theme}`}>
                <div className='circle shadow-lg theme-secondary'>
                  <span></span>
                  <span></span>
                </div>
      
                <div className={`authorName mt-5 text-primary ${darkThemetext}`}>
                  <h1>Hello. <br /> My name is Kevin.</h1>
      
                  <span className={`bg-primary ${darkThemebg}`}></span>
                </div>
      
                <div className='aboutAuthor'>
                  <p > 
                    I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
                    <br />
                    <br />
                    Right now, I'm Design Lead at <span className='text-primary'>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className='text-primary'>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
                    <br />
                    <br />
                    I've got some <span className="text-primary">work on Dribbble</span>, some previous work at <span className="text-primary">Saga</span> and you can find me over on twitter and sometimes on <span className="text-primary">Medium too</span>. I also take <span className="text-primary">too many photos</span>.
                  </p>
                </div>
      
                <div class="mb-3 form-check theme-secondary">
                  <input type="checkbox" class="form-check-input ms-1" id="exampleCheck1"/>
                  <label class="form-check-label ms-2" for="exampleCheck1" >Available for work and general design goodness – <span className={`text-primary theme-secondary text-decoration-underline ${darkThemetext}`}>say hello</span></label>
                </div>
      
                <span className={`landingSpan bg-primary ${darkThemebg}`}></span>
              </div>
            ) 
          }}
      </Theme.Consumer>
    )
  }
}

export default Landing