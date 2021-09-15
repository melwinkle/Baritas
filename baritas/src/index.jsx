 import './App.css';
import React from "react";


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "password") {
      // eslint-disable-next-line
      if (val !="" && val.length<6) {
        err = <strong>Password should be longer than 6 characters</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <div className="App">
       <header className="App-header">
         <div className="FormApp">         
            <h3>BARITAS SIGN IN</h3>           
            <form action="/cashier/orders/">
              <label>
                <input type="text" name="username" placeholder="Username" onChange={this.myChangeHandler}/>
              </label>
              <br></br>
              <label>
                <input type="password" name="password" placeholder="Password" onChange={this.myChangeHandler}/>
                {this.state.errormessage}
              </label>
              <br></br>
             
            <button class="subbut" type="submit" >Sign In</button>
            
           </form>
        </div>
      </header>
    </div>
   
    );
  }
}

export default MainPage;