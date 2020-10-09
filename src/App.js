import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Employees } from './components/Employees';
import { Customers } from './components/Customers';
import AddEmployee from './components/subcomponents/AddEmployee';



function App() {



  return (
    <div>
      <Container>
        <BrowserRouter>
          <ListGroup as="ul">
            <Row xs={4} sm={4} md={4} lg={4} xl={4}>
              <ListGroupItem as="li"><Link to="/">Home</Link></ListGroupItem>
              <ListGroupItem as="li"><Link to="/projects">Projects</Link></ListGroupItem>
              <ListGroupItem as="li"><Link to="/employees">Employees</Link></ListGroupItem>
              <ListGroupItem as="li"><Link to="/customers">Customers</Link></ListGroupItem>
            </Row>
          </ListGroup>
          <Switch>
            <Route exact path="/" component={Home}>
              
            </Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/employees" component={Employees}>
              
            </Route>
            <Route path="/customers" component={Customers}></Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  )
}




export default App;


/* let employees = [];

const addEmployeeToArray = (newEmployee) => {
  employees.push(newEmployee);
}


<Route exact path="/" component ={Home}>
  <AddEmployee employees={employees} addEmployeeToArray={addEmployeeToArray}></AddEmployee>
</Route>

<Route path="/employees" component ={Employees}>
  <Employees employees={employees}></Employees>
</Route> */