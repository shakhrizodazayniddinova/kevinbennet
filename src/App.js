import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/main/Main/Main';
import Footer from './components/Footer/Footer';
import Theme from './Theme/Theme';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      theme: "light"
    }
  }

  toggleTheme = () => {
    this.setState(state => {
      return{
        theme: state.theme === "dark" ? "light" : "dark",
      }
    })
  }

  render(){
    return (
      <Theme.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
        <div className="App">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </Theme.Provider>
    );
  }
}

export default App;