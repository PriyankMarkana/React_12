import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Card } from 'react-bootstrap';
import Home from './Home';



function Photos() {
    let [photos, setphotos] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                setphotos(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <>
        <Home></Home>
            <Row>
                {
                    photos.map((ele, ind) => {
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={ele.url} />
                                    <Card.Body>
                                        <Card.Title style={{fontsize:"16px"}}>{ele.title}</Card.Title>
                                        <Card.Text>
                                            <p className='m-0 p-0'>AlbumsId:{ele.albumId}</p>
                                            <p className='m-0 p-0'>Id:{ele.id}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default Photos;
