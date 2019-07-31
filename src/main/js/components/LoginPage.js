import React from 'react';
import Login from './Login';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        
    }

    logout = () => {
        console.log("Logging out");
        sessionStorage.setItem("permissions",0);
    }

    render() {
        return (
          <div>
              <Login></Login>
              <a href="/" onClick={this.logout}>
                  Logout
              </a>
          </div>
        )
    }
}

export default LoginPage;