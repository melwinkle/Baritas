import React,{useState,useEffect} from "react";
import '../../App.css';
import { Link } from 'react-router-dom';
import { FaStore } from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
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

    return (
    <div class="proad">
     
     <div class="acco">
       <button><FiLogOut />Logout</button>
     
     </div>

      
      <Container>
        <Row>
          {rest.blogs && 
            rest.blogs.map((item)=>(
              <Col><div class="pstore"><Link to={"/administrator/menu/" +item.token}><button  class="pstall" id={item.id} ><FaStore /><h5>{item.name}</h5></button></Link></div></Col>
            ))}
        </Row>
      </Container>
        

        
          

      

       
      
    </div>
  );
}

export default AdminPage;