import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';

const Infocourse = () => {
    const [courses,setCourses]=useState([])
    
  
    useEffect(()=>{
        fetch('https://web-dev-learning-course-server.vercel.app/course')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <div>
            
            <Container>
                <Row  className=''>
               
                    <Col lg="4" className='mt-5 h-100 '  style={{backgroundColor:'cadetblue'}}>
                    {
                       
                        courses.map(course=><p ><Link className='mx-auto p-4 headerc' style={{color:'white'}}  to={`/info/${course.id}`}>{course.name}</Link></p>)
                        
                    }
                    </Col>
                    <Col lg="8" className='row'>
                        
                        {
                            courses.map(course=><Course key={course.id} course={course}></Course>)
                        }
                       
                       
                       
                    </Col>
                    
                </Row>
            </Container>

        </div>
    );
}; 

export default Infocourse;