import React from 'react';
import CurrLLPage from './CurrLLPage';
import Landlord from './Landlord';

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
        // if (this.state.currentLandlord === null) {
        //     landlordPage = (<div>No Landlord selected</div>);
        // } else {
            landlordPage = <CurrLLPage landlord={this.state.currentLandlord}></CurrLLPage>;     
        return (
          <div>
            <h3>Landlords</h3>
            <form onSubmit={this.searchLandlord}>
                <div className="form-inline">
                    <div class="form-group mb-2">
                        <label for="landlordSearch" className="sr-only">Landlord Search</label>
                        <input type="text" class="form-control" id="landlordSearch" aria-describedby="landlord search" placeholder="Enter Landlord Name" />                    
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
            <Landlord rating="5" name="Kevin Butler" property="3718 Parkview Ave Pittsburgh PA" rent="2000" username="magabrin" dependability="4" comment="I never hear from him" ></Landlord>
            {landlordPage}
          </div>
        )
    }
}

export default Landlords;