# Front end API calls and their expected outputs

### Home.js

* route: /topLandlords
* method: GET
* result: 3 landlord objects filtered w/ highest overall score

 ```javascript
 fetch('/topLandlords')
        .then(data => data.json())
        .then(landlords => {
            console.log(landlords);
            // populate home page with landlord info
        })
```

### Login.js

* route: /login
* method: POST
* input: JSON {username: String, password: String}
* result: JSON {successfulLogin: bool, permissionLevel: int}

```javascript
fetch('/login',
            {
                method: 'POST',
                // credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)                
            }
        ).then(response => response.json())
        .then(res => {
            if (res['successfulLogin'] === true) {
                this.setState({
                    loginSuccess: true
                })
                sessionStorage.setItem("username", this.state.username);
                sessionStorage.setItem("permissions", res['permissionLevel']);
            } else {
                console.log("Unsuccessful Login");
                this.setState({
                    loginSuccess: false
                })
            }
            setTimeout(
                () => {
                    this.setState({loginSuccess: null})
                }, 3000
            )
        })
```

### Properties.js

* route: /allproperties
* method: GET
* result: JSON of all property objects

```javascript
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
```

### Landlords.js

* route: /landlordSearch
* method: POST
* input: JSON {name: String}
* return: Landlord object matching on name

```javascript
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
```



### CreateReview.js


* route: /createReview
* method: Form Post
* result: nothing?

```javascript

    <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />   
    <input type="email" className="form-control" id="property" aria-describedby="emailHelp" placeholder="Address" />
    <input type="email" className="form-control" id="landlord" aria-describedby="emailHelp" placeholder="Landlord Name" />
    <input type="number" class="form-control" id="rent" placeholder="Rent" aria-describedby="rentPrepend" />
    <input type="checkbox" className="custom-control-input" id="firstTime" />
    <input type="checkbox" className="custom-control-input" id="rentAgain" />
    <input type="range" className="custom-range" min="1" max="5" id="dependabilityScoreInput" /> 
    <input type="range" className="custom-range" min="1" max="5" id="overallRange" />                 
    <input type="email" className="form-control" id="comments" aria-describedby="emailHelp" placeholder="Comments" />

```