import React, { Component } from 'react';
import "./SectionTwo.css"
import Theme from '../../../Theme/Theme';

class SectionTwo extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <Theme.Consumer>
        {({theme}) => {
            const darkThemetext = theme === "dark" ? "text-white" : "text-primary";
            const darkThemebg = theme === "dark" ? "bg-black" : "bg-primary";

            return(
                <div className={`sectionTwo ${theme}`}>
                    <div>
                        <h3 className={`text-primary ${darkThemetext}`}>{this.props.title}</h3>
                        <p className='lineText mt-4'>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
                    </div>

                    <div className='d-flex gap-4'>
                        <div className='rectangle theme-secondary mt-4'>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='d-flex flex-column mt-3'>
                            <h3>{this.props.title}</h3>
                            <p className='leadingText'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                            <button className='primaryBtn btn btn-outline-primary rounded-pill mt-2'>Button Primary Light</button>
                        </div>
                    </div>

                    <div className='d-flex gap-4 mt-5'>
                        <div className='d-flex flex-column mt-3'>
                            <h3>{this.props.title}</h3>
                            <p className='leadingText'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                            <button className='primaryBtn btn btn-outline-primary rounded-pill mt-2'>Button Primary Light</button>
                        </div>
                        <div className='rectangle theme-secondary mt-4'>
                            <span className={darkThemebg}></span>
                            <span className={darkThemebg}></span>
                        </div>
                    </div>
                </div>
            )
        }}
      </Theme.Consumer>
    )
  }
}

export default SectionTwo;