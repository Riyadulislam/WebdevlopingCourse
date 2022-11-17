import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaDev } from 'react-icons/fa';
import ReactToPdf from 'react-to-pdf'
import { createRef } from 'react';


const Detailspage = () => {
    const course=useLoaderData()
    const ref=createRef();
    const {name,title,img,rating,id,uploadDate,description}=course
    console.log( 'value',course)
    return (
        <div>
          
         <div className='mb-4 mt-5'>
      <Card className="text-center mx-auto h-50 w-75" ref={ref} >
      <ReactToPdf targetRef={ref} filename='course.pdf'>
    {({toPdf}) =>  (
        <Button  onClick={toPdf}>Download</Button>
    )}
    </ReactToPdf>

        <div className='d-flex justify-content-between '>
        <Card.Header>{name}</Card.Header>
        <FaDev    style={{height:'40px',width:'40px'}}></FaDev>
        </div>
     
      <Image className='me-4 fluid' src={img} 
       
        ></Image>
      <Card.Body>
        <Card.Title>{title}</Card.Title> 
        <div> {description}</div>
        <div className='d-flex justify-content-between '>
            <p>number: {rating.number}</p>
            <p>badge:{rating.badge}</p>
        </div>
        <p> Date:{uploadDate}</p>
    <Link className='' to={`/primium/${id}`}><Button variant="primary">premium course</Button></Link>
    
   
        
      </Card.Body>
      
    </Card>  
        </div>
        </div>
    );
};

export default Detailspage;