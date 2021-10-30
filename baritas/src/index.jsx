 import './App.css';
import React from "react";
import {PostData} from '../src/services/PostData';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      err: '',
      redirect:false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    
  }

  login(){
    if(this.state.user && this.state.pass){
      PostData(this.state).then((result)=>{
        if((result.UserData.role)==='1'){
          sessionStorage.setItem('adminData',result);
          this.setState({redirect:true});
          window.location='/administrator';
        }
        else if((result.UserData.role)==='2'){
          sessionStorage.setItem('kitchenData',result);
          this.setState({redirect:true});
          window.location='/kitchen';
        }
        else if((result.UserData.role)==='3'){
          sessionStorage.setItem('barData',result);
          this.setState({redirect:true});
          window.location='/bar';
        }
        else if((result.UserData.role)==='4'){
          sessionStorage.setItem('cashierData',result);
          this.setState({redirect:true});
          window.location='/cashier';
        }
        
        else{
          console.log("login Error");
        }
      });
    }
  
  }
 
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {
    return (
      <div className="App">
       <header className="App-header">
         <div className="FormApp">         
            <h3>BARITAS SIGN IN</h3>           
            <form >
              <label>
                <input type="text" name="user" placeholder="Username" onChange={this.onChange}/>
              </label>
              <br></br>
              <label>
                <input type="password" name="pass" placeholder="Password" onChange={this.onChange} />
                <p>{this.state.errormessage}</p>
              </label>
              <br></br>
             
            <button class="subbut" type="button" onClick={this.login} >Sign In</button>
        
            
           </form>
        </div>
      </header>
    </div>
   
    );
  }
}

export default MainPage;