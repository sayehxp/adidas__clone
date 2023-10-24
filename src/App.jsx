import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {


  return (
  <>
{/* by sayeh */}
<Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home" className='m-2'>Adidas</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar>


  </>
  )
}

export default App
