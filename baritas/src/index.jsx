 import './App.css';
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
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
    console.log(this.state);
    if(this.state.user && this.state.pass){
      PostData(this.state).then((result)=>{
        if((result.UserData.role)==='1'){
          sessionStorage.setItem('adminData',result);
          this.setState({redirect:true});
          window.location='/administrator';
        }
        else if((result.UserData.role)==='2'){
          sessionStorage.setItem('kitchenData',result);
          sessionStorage.setItem('rest',result.UserData.rest);
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
          sessionStorage.setItem('id',result.UserData.id);
          sessionStorage.setItem('rest',result.UserData.rest);
          this.setState({redirect:true});
          window.location='/cashier/order_main';
        }
        else if((result.UserData.role)==='5'){
          sessionStorage.setItem('generalMData',result);
          this.setState({redirect:true});
          window.location='/general_manager';
        }
        else if((result.UserData.role)==='6'){
          sessionStorage.setItem('branchMData',JSON.stringify(result));
          this.setState({redirect:true});
          window.location='/branch_manager/inventory';
        }
        else if((result.UserData.role)==='7'){
          sessionStorage.setItem('productionData',result);
          this.setState({redirect:true});
          window.location='/production';
        }
        else if((result.UserData.role)==='8'){
          sessionStorage.setItem('storeData',result);
          this.setState({redirect:true});
          window.location='/store';
        }
        else{
          alert("Wrong credentials")
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
            <Form>
            <Container>
              <Row id="in">
  <Form.Group className="mb-3 in" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" name="user" onChange={this.onChange} placeholder="Enter Username" />
  
  </Form.Group>
  </Row>


  <Row id="in">
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="pass" onChange={this.onChange} placeholder="Password" />
  </Form.Group>
  </Row>
  <Row id="in">
  <Button variant="primary" id="subbut" type="button" onClick={this.login}>
    Submit
  </Button>
  </Row>
  </Container>
</Form>      
          
        </div>
      </header>
    </div>
   
    );
  }
}

export default MainPage;