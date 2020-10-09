import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Employees = (props) => {
    
    const showEmployees = () => {
        return props.employees.map( ( employee, i) => { 
            return (
                <Col key={`e-${i}`} bg="dark" variant="dark">
                    <article>
                        <h3>{employee}</h3>
                    </article>
                </Col>
            )
        } );
    }

    return (
        <Row>
            { showEmployees()  }
        </Row>
    )
}

