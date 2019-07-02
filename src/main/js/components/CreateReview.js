import React from 'react';

class CreateReview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {       
        return (
          <div>
            <div className="jumbotron">
                <h1>Create Review Here</h1>
                <p>Don't be shy</p>
            </div>
            <form action="/createReview">
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                    <small id="emailHelp" className="form-text text-muted">Insert text here</small>
                </div>

                <div className="form-group">
                    <label for="property">Property</label>
                    <input type="email" className="form-control" id="property" aria-describedby="emailHelp" placeholder="Address" />
                    <small id="emailHelp" className="form-text text-muted">Insert text here</small>
                </div>

                <div className="form-group">
                    <label for="landlord">Landlord</label>
                    <input type="email" className="form-control" id="landlord" aria-describedby="emailHelp" placeholder="Landlord Name" />
                    <small id="emailHelp" className="form-text text-muted">Insert text here</small>
                </div>

                <label for="rent">Annual Rent</label>
                <div class="input-group">                    
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="rentPrepend">$</span>
                    </div>
                    <input type="number" class="form-control" id="rent" placeholder="Rent" aria-describedby="rentPrepend" />
                </div>
                <small></small>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="firstTime" />
                    <label className="custom-control-label" for="firstTime">First Time Renter?</label>
                </div>
                <small></small>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="rentAgain" />
                    <label className="custom-control-label" for="rentAgain">Rent Again?</label>
                </div>
                <small></small>

                <label for="dependabilityScoreInput">Dependability Score</label>
                <small id="dependabilityRangeSmall" className="form-text text-muted">Rate from 0 to 5</small>
                <input type="range" className="custom-range" min="0" max="5" id="dependabilityScoreInput" /> 
                
                <label for="overallRange">Overall Score</label>
                <small id="overallRangeSmall" className="form-text text-muted">Rate from 0 to 5</small>
                <input type="range" className="custom-range" min="0" max="5" id="overallRange" />                 

                <div className="form-group">
                    <label for="comments">Additional Comments</label>
                    <input type="email" className="form-control" id="comments" aria-describedby="emailHelp" placeholder="Comments" />
                    
                </div>

                <button type="submit" class="btn btn-primary">Submit Review</button>
            </form>
          </div>

          
        )
    }
}

export default CreateReview;