import React from 'react';
import Login from './Login';

class Landlord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name :"no name",
            rating : 5,
            property : "empty",
            rent : 0,
            username : "renter",
            dependability : 5,
            comment : "no comment",
        }
    }

    

    render() {
        return (
          <div>
              <div className="card text-center">
                <div className="card-header">
                    Review
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                        </div>
                        <div className="row">
                            <h4 className="col">Overall: {this.props.rating}</h4>
                            <p className="card-text col">Landlord: {this.props.name}</p>                    
                            <p className="card-text col">{this.props.property}</p>                            
                        </div>
                        <div className="row">
                            <p className="card-text col">Rent: ${this.props.rent}</p>
                            <p className="card-text col">Reviewer: {this.props.username}</p>
                            <p className="card-text col">Dependability: {this.props.dependability}</p>                            
                        </div>
                        <br />
                        <div className="row">
                            <p className="card-text col">{this.props.comment}</p>
                        </div>
                    </div>                                    
                    
                </div>
                <div className="card-footer text-muted">                    
                </div>
              </div>              
          </div>
        )
    }
}

export default Landlord;