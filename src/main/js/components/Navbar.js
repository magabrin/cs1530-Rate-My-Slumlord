import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPermissions: sessionStorage.getItem("permissions")
        }
    }

    componentDidMount() {
        let permissions = sessionStorage.getItem("userPermmissions");
        if (permissions) {
            this.setState({
                userPermissions: permissions
            })
        }
    }

    render() {
        return (

            <div>
                <a href='/'><img className="img-thumbnail" src="ratemyslumlord.png" alt="Rate My Slumlord" style={{width:"200px", display:"block"}}></img></a>
                <div className="btn-group-vertical">
                    <a className="btn btn-primary" href='/'>Rate My Slumlord Navbar</a>
                    <a className="btn btn-secondary" href="/loginpage">Login</a>
                    <a className="btn btn-secondary" href="/landlords">Landlords</a>
                    <a className="btn btn-secondary" href="/properties">Properties</a>                    
                    <a className="btn btn-secondary" href="/wiki">Tenant Laws</a>
                    {this.state.userPermissions > 0 ? <a className="btn btn-secondary" href="/moderatorPage">Moderator Page</a> : <div></div>}
                </div>
                
            </div> 
        )
    }
}

export default Navbar;