import React, { Component } from "react";
import './CSS/style.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div className='headerImage'>
        
        </div>
        <div id="header">
          <h1>Nueva Acrópolis</h1>
          <h3>Base de Datos</h3>
        </div>
      </div>
    );
  }
}

export default Header;