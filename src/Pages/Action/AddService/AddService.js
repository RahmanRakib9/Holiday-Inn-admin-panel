import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddService.css'
import '../../../App.css'

const AddService = () => {
     const [roomTitle, setRoomTitle] = useState('');
     const [bedCapacity, setBedCapacity] = useState(0);
     const [bedType, setBedType] = useState('');
     const [price, setPrice] = useState(0);
     const [photo, setPhoto] = useState(null);
     const [description, setDescription] = useState('');


     const handleFormSubmit = e => {
          e.preventDefault();
          if (!photo) {
               alert('Please Select Your Room Photo');
               return;
          }

          const formData = new FormData();
          formData.append('roomTitle', roomTitle);
          formData.append('bedCapacity', bedCapacity);
          formData.append('bedType', bedType);
          formData.append('price', price);
          formData.append('photo', photo);
          formData.append('description', description);

          fetch('http://localhost:5000/rooms', {
               method: 'POST',
               body: formData
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         alert('Room Added Successfully');
                         e.target.reset();
                    }
               })
     }


     return (
          <div className='App-header'>
               <h1 style={{ textAlign: 'center' }}>ADD SERVICE</h1>
               <Form style={{ marginTop: "2%" }} onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-4" >
                         <Form.Label >Room Title</Form.Label>
                         <Form.Control type="text" placeholder="Enter Your Room Title" required onBlur={e => setRoomTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                         <Form.Label>Bed Capacity</Form.Label>
                         <Form.Control type="number" placeholder="Enter Your Bed Capacity (number)" required onBlur={e => setBedCapacity(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                         <Form.Label>Bed Type</Form.Label>
                         <Form.Control type="text" placeholder="Enter Your Bed Type" required onBlur={e => setBedType(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                         <Form.Label>Room Price</Form.Label>
                         <Form.Control type="number" placeholder="Enter Your Room Price (number)" required onBlur={e => setPrice(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                         <Form.Label>Upload Your Room Photo</Form.Label>
                         <Form.Control type="file" accept='image/*' onBlur={e => setPhoto(e.target.files[0])} />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                         <Form.Label>Room Description</Form.Label>
                         <Form.Control as="textarea" rows={7} placeholder="Write About Your Room" required onBlur={e => setDescription(e.target.value)} />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
               </Form>
          </div>
     );
};

export default AddService;