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

            
                <div className="btn-group-vertical">
                    <a className="btn btn-primary" href='/'>Rate My Slumlord Navbar</a>
                    <a className="btn btn-secondary" href="/greeting">Greeting</a>
                    <a className="btn btn-secondary" href="/properties">Properties</a>
                    <a className="btn btn-secondary" href="/ratings">Ratings</a>
                    <a className="btn btn-secondary" href="/wiki">Tenant Laws</a>
                    {/* <div className="row"><a className="btn btn-primary" href='/'>Rate My Slumlord Navbar</a></div>
                <div className="row"><a className="button" href="/greeting">Greeting</a></div>
                <div className="row"><a className="button" href="/properties">Properties</a></div>
                <div className="row"><a className="button" href="/ratings">Ratings</a></div>
                <div className="row"><a className="button" href="/wiki">Tenant Laws</a></div>                 */}
                </div>
                
            
        )
    }
}

export default Navbar;