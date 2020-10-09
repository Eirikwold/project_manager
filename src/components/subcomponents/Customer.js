import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';


const Customer = (props) => {
    return (
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
                <Card.Img src={require('../../assets/Customers.jpg')}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Text>{props.Text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

Customer.propTypes = {
    Title: PropTypes.string.isRequired,
    Text: PropTypes.string.isRequired
}
Customer.defaultProps = {
    Title: "YEP CO",
    Text: "Almost as interesting as the Boring Company"
}

export default Customer;