import React from 'react';
import Login from './Login';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topLandlords: undefined,
            topProperties: undefined,
        }
    }

    componentDidMount() {
        fetch('/topLandlords')
        .then(data => data.json())
        .then(landlords => {
            console.log(landlords);
        })
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Welcome to Rate My Slumlord</h1>
                    <p>Insert slogan here</p>
                </div>
                <h3>Top Landlords</h3>
                {this.state.topLandlords === undefined ? <div>No Landlords</div> : <div>Display landlords here</div> }
                <h3>Top Properties</h3>
                {this.state.topProperties === undefined ? <div>No Properties</div> : <div>Display Properties here</div> }
                <Login></Login>
            </div>
        )
    }
}

export default Home;