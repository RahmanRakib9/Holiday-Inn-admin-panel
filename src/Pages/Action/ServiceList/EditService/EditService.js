import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditService = () => {
     const { id } = useParams();
     const [editService, setEditService] = useState({});


     useEffect(() => {
          fetch(`http://localhost:5000/rooms/${id}`)
               .then(res => res.json())
               .then(data => {
                    setEditService(data)
                    console.log(data)
               })
     }, [])

     return (
          <Container>
               <Form style={{ marginTop: '5%' }}>
                    <Form.Group className="mb-3" >
                         <Form.Label>Room Title</Form.Label>
                         <Form.Control type="text" value={editService.roomTitle || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                         <Form.Label>Bed Capacity</Form.Label>
                         <Form.Control type="number" value={editService.bedCapacity || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                         <Form.Label>Bed Type</Form.Label>
                         <Form.Control type="text" value={editService.bedType || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                         <Form.Label>Room Price</Form.Label>
                         <Form.Control type="number" value={editService.price || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Current Room Photo</Form.Label> <br />
                         <img style={{ height: '200px', width: '200px' }} src={`data:image/*;base64,${editService.photo}`} alt="" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                         <Form.Label>Change Your Current Room Photo</Form.Label>
                         <Form.Control type="file" accept='image/*' />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                         <Form.Label>Room Description</Form.Label>
                         <Form.Control as="textarea" rows={7} value={editService.description || ''} />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
               </Form>
          </Container>
     );
};

export default EditService;