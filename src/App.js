import React from 'react';
import {Button,Table} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>   
    <tr>
      <td>1</td>
      <td>Sahil5201</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Sahil5201</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Sahil5201</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      <Button variant="outline-success" className="mt-3">Submit</Button>
    </div>
  );
}

export default App;
