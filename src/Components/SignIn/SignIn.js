import React from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
  } from 'reactstrap';


function SignIn() {
  return (
    <div>
       <Row className='fluid' >
           <Col  className='me-1 ms-4 ' md="2" style={{background:'red'}}>
               <p className='p-1'>Login</p>
               </Col>
           <Col md="1" style={{background:'green'}}>Column2</Col>
       </Row>
      
    </div>
  )
}

export default SignIn;