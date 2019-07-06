import React from 'react';

class CurrLLPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let landlordInfo;
      if (this.props.landlord === null) {
        landlordInfo = (<div><h3>No Landlord Selected</h3></div>)
      } else {
        landlordInfo = (
          <div>
            <h3>Name: </h3>
            <h4>Rating: </h4>
            <h4>Properties: </h4>
            <h4>Reviews: </h4>
          </div>
        )
      }
      
        return (
          <div>
            {landlordInfo}
            <a className="btn btn-primary btn-lg btn-block" href="/createReview">
                Create Review
            </a>
            
          </div>

        )
    }
}

export default CurrLLPage;