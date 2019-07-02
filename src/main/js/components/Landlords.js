import React from 'react';

class Landlords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLandlord: null
        }
    }

    searchLandlord(event) {
        console.log("searching for landlord")
        console.log(event);
        event.preventDefault();
        const name = event.target.value;
        const data = {
            'name': name,
        }

        fetch(
            '/landlordSearch', {
                method: 'POST',
                // credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)                
            }
        ).then(response => response.json())
        .then(jsonResponse => {
            console.log("return value: ");
            console.log(jsonResponse);
            this.setState({currentLandlord: jsonResponse['name']});
        });
    }

    render() {
        let landlordPage;
        if (this.state.currentLandlord === null) {
            landlordPage = (<div>No Landlord selected</div>);
        } else {
            landlordPage = <CurrLLPage landlor={this.state.currentLandlord}></CurrLLPage>;
        }

        return (
          <div>
            <h3>Landlords</h3>
            
            <form onSubmit={this.searchLandlord}>
                <div class="form-group">
                    <label for="landlordSearch">Landlord Search</label>
                    <input type="text" class="form-control" id="landlordSearch" aria-describedby="landlord search" placeholder="Enter Landlord Name" />                    
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            {landlordPage}
          </div>
        )
    }
}

export default Landlords;