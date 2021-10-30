 import './App.css';
import React from "react";
<<<<<<< HEAD
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
=======
import {PostData} from '../src/services/PostData';
>>>>>>> fcf20bd7f1c22aa4e427d7a826e9874b278ced81


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  handleSubmit(event) {
    if(this.state.password=="cashier"){
      window.location.href="/cashier/orders";

    }else if(this.state.password=="bar"){
      window.location.href="/bar";

    }
    else if(this.state.password=="kitchen"){
      window.location.href="/kitchen";

    }
    else if(this.state.password=="production"){
      window.location.href="/production";

    }
    else if(this.state.password=="store"){
      window.location.href="/store";

    }
    else if(this.state.password=="admin"){
        window.location.href="/administrator";
    }else{
      alert("Invalid username and password");
    }
    event.preventDefault();
=======
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
>>>>>>> fcf20bd7f1c22aa4e427d7a826e9874b278ced81
  }


  render() {
    return (
      <div className="App">
       <header className="App-header">
         <div className="FormApp">         
            <h3>BARITAS SIGN IN</h3>    
            <Form onSubmit={this.handleSubmit}>
            <Container>
              <Row id="in">
  <Form.Group className="mb-3 in" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" name="username"  value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" />
  
  </Form.Group>
  </Row>


  <Row id="in">
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password"  value={this.state.password}  onChange={this.handleChange} placeholder="Password" />
  </Form.Group>
  </Row>
  <Row id="in">
  <Button variant="primary" id="subbut"type="submit">
    Submit
  </Button>
  </Row>
  </Container>
</Form>      
            {/* <form >
              <Container>
            <Row>
              <label>
                <input type="text" name="user" placeholder="Username" onChange={this.onChange}/>
              </label>
              </Row>


              <Row>
              <label>
                <input type="password" name="pass" placeholder="Password" onChange={this.onChange} />
                <p>{this.state.errormessage}</p>
              </label>
            </Row>

            <Row>
             
<<<<<<< HEAD
            <button id="subbut" type="submit" >Sign In</button>
            </Row>
            </Container>
           </form> */}
=======
            <button class="subbut" type="button" onClick={this.login} >Sign In</button>
        
            
           </form>
>>>>>>> fcf20bd7f1c22aa4e427d7a826e9874b278ced81
        </div>
      </header>
    </div>
   
    );
  }
}

export default MainPage;