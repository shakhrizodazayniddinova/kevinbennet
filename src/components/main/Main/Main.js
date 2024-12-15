import React, { Component } from 'react';
import Landing from '../Landing/Landing';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import SectionFour from '../SectionFour/SectionFour';

export class Main extends Component {
  constructor(props){
    super(props);

    this.state ={
      title: "Title",
    }
  }
  render() {
    return (
      <main>
        <Landing/>
        <SectionTwo title={this.state.title}/>
        <SectionThree  title={this.state.title}/>
        <SectionFour title={this.state.title}/>
      </main>
    )
  }
}

export default Main