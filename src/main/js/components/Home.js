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

                
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <a href="/loginpage">
                            <div class="card text-white bg-primary mb-3" style={{maxWidth: '26rem', height: '20rem'}}>
                                <div class="card-header">Login</div>
                                <div class="card-body">
                                    <h5 class="card-title">Login To Your Account</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>  
                            </div>
                            </a>
                        </div>
                        <div class="col-lg">
                            <a href="/landlords">
                            <div class="card text-white bg-secondary mb-3" style={{maxWidth: '26rem', height: '20rem'}}>
                                <div class="card-header">Landlords</div>
                                <div class="card-body">
                                    <h5 class="card-title">View Landlord Page</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                            </a>
                        </div>                        
                    </div>
                    <div class="row"></div>
                    <div class="row">
                        <div class="col-lg">
                            <a href="/properties">
                            <div class="card text-white bg-info mb-3" style={{maxWidth: '26rem', height: '20rem'}}>
                                <div class="card-header">Properties</div>
                                <div class="card-body">
                                    <h5 class="card-title">See All Listed Properties</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>  
                            </div>
                            </a>
                        </div>
                        <div class="col-lg">
                            <a href="/wiki">
                            <div class="card text-white bg-warning mb-3" style={{maxWidth: '26rem', height: '20rem'}}>
                                <div class="card-header">Tenant laws</div>
                                <div class="card-body">
                                    <h5 class="card-title">See Common Tenant Laws</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            </a>
                        </div>                        
                    </div>

                    <div class="row">
                        <h3>Top Properties</h3>                        
                    </div>
                    <div class="row">
                        {this.state.topProperties === undefined ? <div>No Properties</div> : <div>Display Properties here</div> }
                    </div>
                    <div class="row">
                        <h3>Top Landlords</h3>                        
                    </div>
                    <div class="row">
                        {this.state.topLandlords === undefined ? <div>No Landlords</div> : <div>Display landlords here</div> }
                    </div>
                    
                    

                </div>


                </div>
                
                
            
        )
    }
}

export default Home;