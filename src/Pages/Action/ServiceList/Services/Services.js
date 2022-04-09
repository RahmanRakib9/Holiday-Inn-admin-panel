import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import '../../../../App.css'

const Services = () => {
     const [room, setRoom] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/rooms')
               .then(res => res.json())
               .then(data => {
                    setRoom(data)
                    // console.log(data);
               })
     }, [])

     return (

          <Container>
               <Row className="justify-content-center w-100">
                    <h2 style={{ color: "white" }}>Total Rooms :{room.length}</h2>
                    {
                         room.map(x => <Service x={x} key={x._id}></Service>)
                    }
               </Row>
          </Container>

     );
};

export default Services;