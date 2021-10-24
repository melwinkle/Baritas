 import './App.css';
import React from "react";



class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: null,
      errormessage: ''
    };


    
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';

    if (nam === "password") {
      // eslint-disable-next-line
      if (val !="" && val.length<3 ) {
        err = <strong>Password should be longer than 2 characters</strong>;
      }else{
        if(val==="bar"){
          window.location.href="/bar";
        }
      }
    }

    if (nam === "password") {
      // eslint-disable-next-line
      if (val !="" && val.length<3 ) {
        err = <strong>Password should be longer than 2 characters</strong>;
      }else{
        if(val==="kitchen"){
          window.location.href="/kitchen";
        }
      }
    } 

    if (nam === "password") {
      // eslint-disable-next-line
      if (val !="" && val.length<3 ) {
        err = <strong>Password should be longer than 2 characters</strong>;
      }else{
        if(val==="production"){
          window.location.href="/production";
        }
      }
    } 

    if (nam === "password") {
      // eslint-disable-next-line
      if (val !="" && val.length<3 ) {
        err = <strong>Password should be longer than 2 characters</strong>;
      }else{
        if(val==="store"){
          window.location.href="/store";
        }
      }
    } 

    if (nam === "password") {
      // eslint-disable-next-line
      if (val !="" && val.length<3 ) {
        err = <strong>Password should be longer than 2 characters</strong>;
      }else{
        if(val==="cashier"){
          window.location.href="/cashier/orders/";
        }
      }
    } 

    if (nam === "password") {
      // eslint-disable-next-line
      if (val !="" && val.length<6) {
        err = <strong>Password should be longer than 6 characters</strong>;
      }
    }

    if (nam === "password") {
      // eslint-disable-next-line
      if (val =="admin") {
        // if(nam=="password"){

        // }
        window.location.href="/administrator";
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
            <form >
              <label>
                <input type="text" name="username" placeholder="Username"  onChange={this.myChangeHandler}/>
              </label>
              <br></br>
              <label>
                <input type="password" name="password" placeholder="Password" onChange={this.myChangeHandler}/>
                <p>{this.state.errormessage}</p>
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