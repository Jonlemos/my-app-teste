import React from 'react';
import './App.css';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo da Página"/>
      <div className="content"> 
        <p>Chemistry or <strong>Alchemy</strong>, what do you <strong>want</strong> ?</p>

        <form>
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" placeholder="*****@*****.***"/>
          <button className="btn" type="submit">Enter</button>
        </form>
      </div>
    </div>
    
    
  );
}

export default App;
