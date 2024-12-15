import React, { Component } from 'react';
import "./SectionFour.css";
import Cards from './Cards';
import Theme from '../../../Theme/Theme';

class SectionFour extends Component {
  render() {
    return (
      <Theme.Consumer>
        {({theme}) => {
          const darkThemetext = theme === "dark" ? "text-white" : "text-primary";

          return(
            <div className={theme}>
              <div className='sectionFour'>
                <div className='d-flex flex-column'>
                    <h3 className={`text-primary ${darkThemetext}`}>{this.props.title}</h3>
                    <p>
                        Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
                    </p>
                </div>

                <div className='cards mt-5'>
                    <Cards title={this.props.title}/>
                    <Cards title={this.props.title}/>
                    <Cards title={this.props.title}/>
                </div>
              </div>
            </div>
          )
        }}
      </Theme.Consumer>
    )
  }
}

export default SectionFour