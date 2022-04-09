import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../../../App.css'

const Service = ({ x }) => {
     const { photo, roomTitle, bedType, description, price, bedCapacity, _id } = x;

     const navigate = useNavigate();
     const handleNavigate = editID => {
          navigate(`/edit/${editID}`)
     }

     return (
          <Col xs={12} md={4} lg={3}>
               <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={`data:image/*;base64,${photo}`} />
                    <Card.Body>
                         <Card.Title>{roomTitle}</Card.Title>
                         <Card.Text>
                              {description}
                         </Card.Text>
                         <Button variant="primary" onClick={() => handleNavigate(x._id)}>Edit</Button>
                         <Button variant="danger">Delete</Button>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Service;

