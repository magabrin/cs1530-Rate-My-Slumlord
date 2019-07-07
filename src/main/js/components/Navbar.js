import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <img className="img-thumbnail" src="ratemyslumlord.png" alt="Rate My Slumlord" style={{width:"200px", display:"block"}}></img>
                <div className="btn-group-vertical">
                    <a className="btn btn-primary" href='/'>Rate My Slumlord Navbar</a>
                    <a className="btn btn-secondary" href="/greeting">Greeting</a>
                    <a className="btn btn-secondary" href="/landlords">Landlords</a>
                    <a className="btn btn-secondary" href="/properties">Properties</a>
                    <a className="btn btn-secondary" href="/ratings">Ratings/Reviews</a>
                    <a className="btn btn-secondary" href="/wiki">Tenant Laws</a>
                </div>
                
            </div>
        )
    }
}

export default Navbar;