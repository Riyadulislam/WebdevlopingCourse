import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Primium = () => {
    const course=useLoaderData()
    const {name,title,img,rating,id,uploadDate,question}=course

    return (
        <div className='border border-primary mt-5 w-50 mx-auto p-5 ' style={{backgroundColor:'cadetblue',color:'white'}}>
         <p> Course Name: {name}</p>
         <p> Question: {question}</p>
         <p> Title: {title}</p>
        </div>
    );
};

export default Primium;