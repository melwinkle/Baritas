import React,{useState,useEffect} from "react";
import '../../App.css';
import { Link } from 'react-router-dom';
import { FaStore } from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol,MDBBtn } from 'mdb-react-ui-kit';
import axios from "axios";
/* We simply can use an array and loop and print each user */
function AdminPage (){

  const [rest, setRest] = useState({ blogs: [] });

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallrestaurants.php'
        );
        setRest({ blogs: data.data });
        console.log(data);
      };
      fetchPostList();
    }, [setRest]);


   function handleClick(btn) {
    sessionStorage.setItem('rest',btn);
    }

 
   
    return (
    <div class="proda">
     
     <div class="acco">
       <button><Link to='/'><FiLogOut />Logout</Link></button>
     
     </div>

    
        
      <MDBContainer>
      <MDBRow>
      {rest.blogs && 
            rest.blogs.map((item)=>(
              <MDBCol size='6' sm='3' className='col-example '>
                <div class="pstore">
                <MDBBtn href="/administrator/inventory/" class="pstall" onClick={handleClick.bind(this,item.id)} key={item.id}><FaStore /><h5>{item.name}</h5></MDBBtn></div>
              </MDBCol>
        ))}
        <MDBCol size='6' sm='3' className='col-example '>
                <div class="pstore">
                <MDBBtn href="/administrator/production_g/" class="pstall" ><FaStore /><h5>Production</h5></MDBBtn></div>
              </MDBCol>
      </MDBRow>
    </MDBContainer>
        
          

      

       
      
    </div>
  );
}

export default AdminPage;