import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Greeting from './components/Greeting';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <body>
          <Navbar></Navbar>
          <p>Inside index.html</p>
          <p>Get your greeting <a href="/greeting">here</a></p>
          {this.props.page === 'home' ? <Home></Home> : <div></div>}
          {this.props.page === 'greeting' ? <Greeting></Greeting> : <div></div>}
        </body>
      </div>
    );
  } 
}

export default App;
