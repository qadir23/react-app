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
       <Row className='' style={{width:'100%'}}>
           <Col  className=''  style={{background:'#0eb7a0',width:'100%'}}>
               <p className='py-2 ms-2'style={{color:'white',fontsize:'24px'}}>Login</p>
               </Col>
           {/* <Col md="1" style={{background:'green'}}>Column2</Col> */}
       </Row>
      
    </div>
  )
}

export default SignIn;