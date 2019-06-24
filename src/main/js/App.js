import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Greeting from './components/Greeting';
import Wiki from './components/Wiki';
import Properties from './components/Properties';
import Ratings from './components/Ratings'; 

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <body>
          <div className="container-fluid"> 
            <div className="row">
              <div className="col-sm">
                <Navbar></Navbar>
              </div>
              <div className="col-xl">
                {this.props.page === 'home' ? <Home></Home> : <div></div>}
                {this.props.page === 'greeting' ? <Greeting></Greeting> : <div></div>}
                {this.props.page === 'wiki' ? <Wiki></Wiki> : <div></div>}
                {this.props.page === 'properties' ? <Properties></Properties> : <div></div>}
                {this.props.page === 'ratings' ? <Ratings></Ratings> : <div></div>}
              </div>
            </div>           
            
          </div>  
          {/* <div className="container">
            <p>Inside index.html</p>
            <p>Get your greeting <a href="/greeting">here</a></p>
            
          </div> */}
          
        </body>
      </div>
    );
  } 
}

export default App;
