import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Customer from './subcomponents/Customer';

export const Customers = () => {
    return (
        <div>
            <Row xl={12}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Customer Title="NorTele" Text="Very innovative thinkers" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Customer />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Customer />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Customer />
                </Col>
            </Row>
        </div>
    )
}