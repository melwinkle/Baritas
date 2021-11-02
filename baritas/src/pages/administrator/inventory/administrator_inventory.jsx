import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

const AxiosPost = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallinventory.php'
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div class="proda">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name </th>
            <th>Category</th>
            <th>Unit Price</th>
            <th>In Stock</th>
            <th>Measurement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.unit}</td>
                <td>{item.in}</td>
                <td>{item.Measure}</td>
                <td><button><a href={'/administrator/inventory/view/' + item.id}>Edit</a></button></td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default AxiosPost;
