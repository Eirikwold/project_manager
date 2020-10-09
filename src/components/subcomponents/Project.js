import React from 'react';

import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

export const Project = (props) => {

    //const [statues, setStatus] = useState("")

    return (
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
                <Card.Img src={require('../../assets/reactjs.jpg')}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Text>{props.Text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}