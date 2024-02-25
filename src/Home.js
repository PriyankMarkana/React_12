import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Row className='home'>
    <Col><p className='m-0'><Link to="/">Home</Link></p></Col>
    <Col><p className='m-0'><Link to="/posts">Posts</Link></p></Col>
    <Col><p className='m-0'><Link to="/comments">Comments</Link></p></Col>
    <Col><p className='m-0'><Link to="/albums">Albums</Link></p></Col>
    <Col><p className='m-0'><Link to="/photos">Photos</Link></p></Col>
    <Col><p className='m-0'><Link to="/todos">Todos</Link></p></Col>
    <Col><p className='m-0'><Link to="/users">Users</Link></p></Col>
   </Row>
  )
}

export default Home;
