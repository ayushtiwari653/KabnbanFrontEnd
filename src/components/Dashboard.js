import React, {useState} from 'react'
import { Card ,Button} from 'react-bootstrap';
import Welcome from './Welcome';
import Welcomeheader from './Welcomeheader';
import * as Constants from './Constants';
import DashboardHeader from '../dashboardHeader';

var n = 0
const Dashboard = () => {
    const [post,setPosts] = useState([]);

   function getPosts() {
    const url = Constants.GET_ALL_PROJECT;

    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(postsFromServer => {
        setPosts(postsFromServer);
      })
      .catch((error) => {
        console.log(error);
        
      });
  }
  getPosts()
  return (
    <div>
       <DashboardHeader />
      
        {post.map((post) =>(
            <Card key={post.postId}>
            <Card.Header as="h5"></Card.Header>
            <Card.Body>
              <Card.Title>{post.projectName}</Card.Title>
              <Card.Text>
                {post.projectDescription}
              </Card.Text>
              <a href='/board' class="btn btn-outline-primary btn-sm px-5" variant="primary">Goto Project</a>
            </Card.Body>
          </Card>
        ))

        }
    </div>
  )
}

export default Dashboard