import React from 'react';
import Landlord from './Landlord';

class ModeratorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:1
        }
    }

    hide = (event) => {
        let item = event.target.name;
        console.log(item);
        console.log(event);
        if (!item) {
            item = "review"+this.state.counter;
        }
        let temp = this.state.counter;
        temp = temp + 1;
        this.setState({counter:temp});
        //document.getElementById(item).style.visibility = "hidden";
        document.getElementById(item).remove();
    }

    render() {
        return (
          <div>
              <div className="jumbotron">
                  <h1>Moderator Page</h1>
                  <p>Double click on reviews to remove them</p>
              </div>

                <div id="review1" name="review1" onDoubleClick={this.hide}>
                  <Landlord id="review1" name="review1" rating="5" name="Kevin Butler" property="3718 Parkview Ave Pittsburgh PA" rent="2000" username="magabrin" dependability="4" comment="I never hear from him" ></Landlord>
                </div>
                <div id="review2" name="review2" onDoubleClick={this.hide}>
                    <Landlord rating="2" name="Kevin Butler" property="3718 Parkview Ave Pittsburgh PA" rent="2000" username="john" dependability="5" comment="I don't remmeber what Kevin looks like" ></Landlord>
                </div>
                <div id="review3" name="review3" onDoubleClick={this.hide}>
                    <Landlord rating="3" name="Kevin Butler" property="3718 Parkview Ave Pittsburgh PA" rent="2000" username="greener" dependability="5" comment="Kevin is a super great guy. Would definitely rent from him again!" ></Landlord>
                </div>
              
              
          </div>
        )
    }
}

export default ModeratorPage;