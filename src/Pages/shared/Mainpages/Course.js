import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {name,title,img,id,uploadDate}=course;
    return (
        <div className='col-12 col-lg-6'>
         <div className='mb-4 mt-5 '>
             <Card className="text-center"   style={{height:'400px',width:'300px'}}>
      <Card.Header className='headerc' style={{backgroundColor:'cadetblue',color:'white'}}>{name}</Card.Header>
      <Image className='me-4' src={img} 
        style={{height:'200px',width:'300px'}}
        ></Image>
      <Card.Body style={{backgroundColor:'cadetblue'}}>
        <Card.Title style={{backgroundColor:'cadetblue',color:'white'}}>{title}</Card.Title>
        <Card.Text style={{backgroundColor:'cadetblue',color:'white'}}>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
        <Link to={`/info/${id}`}><Button variant="primary">Get course</Button></Link>
      </Card.Body>
      <Card.Footer className="headerc" style={{backgroundColor:'cadetblue',color:'white'}}> date:{uploadDate}</Card.Footer>
    </Card>  
        </div>
        </div>
    );
};

export default Course;