import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div className="row">
            //     <div className="col-lg"><a href='/'>Rate My Slumlord Navbar</a></div>
            //     <div className="col-sm"><a href="/greeting">Greeting</a></div>
            //     <div className="col-sm"><a href="/properties">Properties</a></div>
            //     <div className="col-sm"><a href="/ratings">Ratings</a></div>
            //     <div className="col-sm"><a href="/wiki">Tenant Laws</a></div>                
            // </div>

            <div className="container">
                <div className="row"><a href='/'>Rate My Slumlord Navbar</a></div>
                <div className="row"><a href="/greeting">Greeting</a></div>
                <div className="row"><a href="/properties">Properties</a></div>
                <div className="row"><a href="/ratings">Ratings</a></div>
                <div className="row"><a href="/wiki">Tenant Laws</a></div>                
            </div>
        )
    }
}

export default Navbar;