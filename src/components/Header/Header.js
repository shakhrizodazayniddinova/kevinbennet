import React, { Component } from 'react';
import "./Header.css";
// font icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFigma, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Theme from '../../Theme/Theme';

class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Theme.Consumer>
        {({theme, toggleTheme}) => {
          const isDarkMode = theme === "dark";
          const darkThemetext = theme === "dark" ? "text-white" : "text-primary";

          return(
            <div className={theme}>
              <header className={`w-100 shadow d-flex justify-content-between `}>
                <div className='logo d-flex gap-5 align-items-center'>
                    <h3 className='mt-1'>Kevin Bennett</h3>

                    <ul className={`d-flex gap-3 list-unstyled pt-3`}>
                        <li><a href="#" className={`text-decoration-none ${darkThemetext}`}>Section two</a></li>
                        <li><a href="#" className={`text-decoration-none ${darkThemetext}`}>Section three</a></li>
                        <li><a href="#" className={`text-decoration-none ${darkThemetext}`}>Section four</a></li>
                    </ul>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3'>
                    <button className={`socialBtn text-primary fs-5 ${darkThemetext}`}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button className={`socialBtn text-primary fs-5 ${darkThemetext}`}>
                        <FontAwesomeIcon icon={faFigma} />
                    </button>
                    <button className={`socialBtn text-primary fs-5 ${darkThemetext}`}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <div className='d-flex align-items-center justify-content-center ms-4 gap-0'>
                        <p className='m-0'>{theme === "dark" ? "Light mode:" : "Dark mode:"}</p>

                        <button className={`text-black p-0 pt-1 w-auto ${theme === "dark" ? "text-white" : "text-black"}`} onClick={toggleTheme}>
                            <FontAwesomeIcon icon={isDarkMode ? faToggleOn : faToggleOff} className='ms-2 fs-4'/>
                        </button>
                    </div>
                </div>
              </header>
            </div>
          )
        }}
      </Theme.Consumer>
    )
  }
}

export default Header