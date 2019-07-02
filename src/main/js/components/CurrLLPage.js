import React from 'react';

class CurrLLPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <p>CurrLLPage</p>
            <a className="btn btn-primary btn-lg btn-block" href="/createReview">
                Create Review
            </a>
          </div>

        )
    }
}

export default CurrLLPage;