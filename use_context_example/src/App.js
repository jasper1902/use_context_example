import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap'
import NameForm from './components/NameForm'
import Names from './components/Names'
import { NamesContext } from './store/NamesContext'

function App() {
  
  return (
    <Container className="my-5">
      <h1 className="text-center">React useContext Example</h1>
      <NameForm/>
      <Names/>
    </Container>
  );
}

export default App;
