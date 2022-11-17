import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/shared/Header';
import Leftnav from '../Pages/shared/Leftnav';

import Righttside from '../Pages/shared/Righttside';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
               
                    <Col lg="10">
                    <Outlet></Outlet>
                    </Col>
                    
                </Row>
            </Container>


        </div>
    );
};

export default Main;
