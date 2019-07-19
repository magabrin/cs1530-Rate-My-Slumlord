import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Greeting from './components/Greeting';
import Wiki from './components/Wiki';
import Properties from './components/Properties';
import ModeratorPage from './components/ModeratorPage'; 
import CreateReview from './components/CreateReview';
import Landlords from './components/Landlords';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <body>
          <div className="container-fluid"> 
            <div className="row">
              <div className="col-sm" style={{'max-width':'max-content'}}>
                <Navbar></Navbar>
              </div>
              <div className="col-xl">
                {this.props.page === 'home' ? <Home></Home> : <div></div>}
                {this.props.page === 'greeting' ? <Greeting></Greeting> : <div></div>}
                {this.props.page === 'wiki' ? <Wiki></Wiki> : <div></div>}
                {this.props.page === 'properties' ? <Properties></Properties> : <div></div>}
                {this.props.page === 'moderatorPage' ? <ModeratorPage></ModeratorPage> : <div></div>}
                {this.props.page === 'createReview' ? <CreateReview></CreateReview> : <div></div>}
                {this.props.page === 'landlords' ? <Landlords></Landlords> : <div></div>}
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
