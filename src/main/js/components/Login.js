import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
          <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputUsername1"  placeholder="Enter username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {/* <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        )
    }
}

export default Login;