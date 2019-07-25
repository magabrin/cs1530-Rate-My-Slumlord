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
                                    <p class="card-text">Creating an account allows you to create reviews, so you can contribute with your tenant experience.</p>
                                </div>  
                            </div>
                            </a>
                        </div>
                        <div class="col-lg">
                            <a href="/landlords">
                            <div class="card text-white bg-secondary mb-3" style={{maxWidth: '26rem', height: '20rem'}}>
                                <div class="card-header">Landlords</div>
                                <div class="card-body">
                                    <h5 class="card-title">View Landlord Pages</h5>
                                    <p class="card-text">See the reviews for landlords. Create a review if you are logged in. Search for a landlord.</p>
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
                                    <p class="card-text">See a list of all properteis with reviews. Search for reviews based on the property.</p>
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
                                    <p class="card-text">Your quick link for tenant/landlord faqs. See some common laws that every tenant should be aware of, especially if you're a first time renter.</p>
                                </div>
                            </div>
                            </a>
                        </div> 
                                                
                    </div>

                    {/* <div class="row">
                        <h3>Top Properties</h3>                        
                    </div>
                    <div class="row">
                        {this.state.topProperties === undefined ? <div>No Properties</div> : <div>Display Properties here</div> }
                    </div> */
                    }
                   <div class="col-lg">
                        <div class="row">
                            <h3>Top Landlords</h3>                        
                        </div>
                        <div class="row">
                            {this.state.topLandlords === undefined ? <div>No Landlords</div> : <div>Display landlords here</div> }
                        </div>
                    </div>  
                    
                    

                </div>


                </div>
                
                
            
        )
    }
}

export default Home;