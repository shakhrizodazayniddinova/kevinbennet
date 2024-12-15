import React, { Component } from 'react';
import "./SectionThree.css";
import Theme from '../../../Theme/Theme';

class SectionThree extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (

      <Theme.Consumer>
        {({theme}) => {
          const darkThemetext = theme === "dark" ? "text-white" : "text-primary";
          const darkThemebg = theme === "dark" ? "bg-black" : "bg-primary";

          return(
            <div className={theme}>
              <div className='sectionThree d-flex flex-row align-items-center px-5 gap-5 theme-secondary'>
                <div className="linesDiv">
                    <span className={darkThemebg}></span>
                    <span className={darkThemebg}></span>
                </div>
                <div className='titleDiv'>
                    <h3 className={`text-primary pb-5 ${darkThemetext}`}>{this.props.title}</h3>
                    <p>
                        Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
                        <br />
                        <br />
                        Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
                        <br />
                        <br />
                        Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
                    </p>
                    <button className='primaryBtn btn btn-outline-primary rounded-pill mt-3'>Sign up to our newsletter</button>
                </div>
              </div>
            </div>
          )
        }}
      </Theme.Consumer>
      
    )
  }
}

export default SectionThree;