import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greetingData: "not loaded"
        };
    }

    componentDidMount() {
        fetch('/restgreeting')
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse);
            this.setState({
                greetingData: jsonResponse['content']
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Greeting</h2>
                <h3>{this.state.greetingData}</h3>
            </div>
        )
    }
}

export default Greeting;