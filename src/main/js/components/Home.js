import React from 'react';
// import Login from 'Login';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    Home
                </div>
                <Login></Login>
            </div>
        )
    }
}

export default Home;