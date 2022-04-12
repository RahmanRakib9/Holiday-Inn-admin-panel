import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../../../App.css'

const Service = ({ x }) => {
     const { photo, roomTitle, bedType, description, price, bedCapacity, _id, room, setRoom } = x;

     const navigate = useNavigate();
     const handleNavigate = editID => {
          navigate(`/edit/${editID}`)
     }

     //handle delete service
     const handleDeleteService = (deleteId) => {
          fetch(`http://localhost:5000/rooms/${deleteId}`, {
               method: 'DELETE',
          })
               .then(res => res.json())
               .then(data => {
                    if (data.deletedCount > 0) {
                         alert('Service Deleted Successfully');
                         window.location.reload();
                    }
               })
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
                         <Button variant="danger" onClick={() => handleDeleteService(x._id)}>Delete</Button>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Service;

