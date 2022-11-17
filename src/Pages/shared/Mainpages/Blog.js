import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-5'>
           
            <Container style={{backgroundColor:'cadetblue',color:'white'}}>
            <h1 className='text-center headerc'>Blog</h1>
                <Row>
                    <Col lg="6">
                        <h3 className='headerc'>What is Cors?</h3>
                        <p>Cross-origin resource sharing ( CORS) is a mechanism that allows restricted 
                            resources on a web page to be requested from another domain outside the domain
                             from which the first resource was served. [1] A web page may freely embed 
                             cross-origin images, stylesheets, scripts, iframes, and videos. [2] Certain
                              "cross-domain" requests, notably Ajax requests
                            , are forbidden by default by the same-origin security policy.</p>
                        <h3 className='headerc' >What is node?How does node work?</h3>
                        <p>Nodes are the custodians of a blockchain. They keep all copies of the ledger in sync, 
                            storing encrypted data of past transactions while taking on new blocks for scalable growth.
                             They are algorithmically
                             programmed to execute transactions based on a majority consensus</p>
                    </Col>
                   
                    <Col lg="6">
                    <h3 className='headerc'>How does private route work?</h3>
                    <p>Private peering routes requests to the customer's private Azure services, for example, Azure Virtual Machines. Each peering is a pair of independent Border Gateway Protocol (BGP) sessions, 
                        each configured redundantly for high availability.</p>
                    <h3 className='headerc'>why are u using firebase?WWhat other options do you have to implement authentication?</h3>
                    <p>Firebase Authentication offers an array of methods of authentication such as email, password,
                         and others. Firebase provides a comprehensive SDK tool including UI libraries to build a custom 
                         interface as well as open-source UIs that you use. Hosting — to serve your web app 
                        for users globally.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;