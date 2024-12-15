import React, { Component } from 'react';
import "./Cards.css";
import Theme from '../../../Theme/Theme';

class Cards extends Component {
  render() {
      return (
          <Theme.Consumer>
            {({theme}) => {
                const darkThemebg = theme === "dark" ? "bg-white" : "bg-primary";
                return(
                    <div className='titleCard d-flex gap-5 mb-5'>
                        <div className='linesDiv theme-secondary'>
                            <span className={darkThemebg}></span>
                            <span className={darkThemebg}></span>
                        </div>
                        <div className='titleDiv '>
                            <h4>{this.props.title}</h4>
                            <p>Subhead in here</p>
                            <p>
                                Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                            </p>
                        </div>
                    </div>
                )
            }}
        </Theme.Consumer>
    )
  }
}

export default Cards