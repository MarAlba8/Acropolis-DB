import React, { Component} from 'react';
import MainContent from "./components/MainContent"
import Header from "./components/Header"
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="site">
              <main>
                  <Header />
                  <MainContent />                  
             </main>
          </div>
      );
  }
}

export default App;
