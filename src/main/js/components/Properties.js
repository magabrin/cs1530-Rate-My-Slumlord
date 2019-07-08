import React from 'react';

class Properties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          retrievedProperties: ['properties'],
        }
    }

    componentDidMount() {
      fetch("/allproperties")
      .then(data => data.json())
      .then(res => {
        if (res) {
          this.setState({
            retrievedProperties: res
          })
        } else {
          this.setState({
            retrievedProperties: ['no properties'],
          })
        }
        
      })
    }

    render() {
        return (
          <div>
            Properties
            <ul>
              {/* {this.state.retrievedProperties ? this.state.retrievedProperties.forEach(element => {
                return (<li>{element}</li>)
              }) : <div>Undefined Properties</div>} */}
              <li>No Properties</li>
            </ul>
          </div>
        )
    }
}

export default Properties;