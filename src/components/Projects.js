import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Project } from './subcomponents/Project';

export const Projects = (props) => {



    return (
        <Row xl={12}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Project Title="NorTel web app" Text="Creating a web app to monitor mobile useage in an area online for customers to view." />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Project Title="Not a pirate" Text="Definently not a site for pirating content. And it doesn't handle equalizing card size.." />
            </Col>
        </Row>
    )
}

