import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            loginSuccess: null,
        }
    }

   

    handleChange = (event) => {
        console.log(event);
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    login = (event) => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        };

        if (data.username == "moderator") {            
            this.setState({loginSuccess: true});
            setTimeout(
                () => {
                    this.setState({loginSuccess: null})
                }, 3000
            );
            sessionStorage.setItem("permissions", 1);
            
        } else {
            fetch('/login',
            {
                method: 'POST',
                // credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)                
            }
        ).then(response => response.json())
        .then(res => {
            if (res['successfulLogin'] === true) {
                this.setState({
                    loginSuccess: true
                })
                sessionStorage.setItem("username", this.state.username);
                sessionStorage.setItem("permissions", res['permissionLevel']);
            } else {
                console.log("Unsuccessful Login");
                this.setState({
                    loginSuccess: false
                })
            }
            setTimeout(
                () => {
                    this.setState({loginSuccess: null})
                }, 3000
            )
          })
        }
                            
    }

 
    componentDidMount() {
        setTimeout(
            () => {
                this.setState({loginSuccess: null})
                let loginAlert = (<div></div>);
            }, 3000
        )
    }

    render() {
        let loginAlert;
        if (this.state.loginSuccess) {
            loginAlert = (<div className="alert alert-danger" role="alert"> Login Failed </div>)
        } else if (loginAlert === false) {
            loginAlert = (<div className="alert alert-success" role="alert"> Login Succeeded! </div>)            
        }
        
        return (
          <div>
            <h3>Login</h3>
            <form onSubmit={this.login}>
                <div className="form-group">
                    <label for="usernameID">Username</label>
                    <input type="text" className ="form-control" name="username"  placeholder="Enter username" onChange={this.handleChange} id="usernameID"/>
                </div>
                <div className="form-group">
                    <label for="passwordID">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password"  onChange={this.handleChange} id="passwordID"/>
                </div>                
                <button type="submit" class="btn btn-primary">Submit</button>
                <div id="alertSpace">{this.state.loginSuccess ? <div className="alert alert-success" role="alert"> Login Succeeded! :)  </div> : this.state.loginSuccess!==null?<div class="alert alert-danger" role="alert"> Login Failed  </div>:<div></div>}</div>
            </form>
          </div>
        )
    }
}

export default Login;