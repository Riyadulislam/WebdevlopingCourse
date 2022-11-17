import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Leftnav = () => {
    const [courses,setCourses]=useState([])
    console.log(courses)
    
    useEffect(()=>{
        fetch('https://web-dev-learning-course-server.vercel.app/course')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <div>
            <p>Webdevlopment Course</p>
            <h1>{courses.name}</h1>
            {
                courses.map(course=><p><Link  to={`/course/${course.id}`}>{course.name}</Link></p>)
            }
          
        </div>
    );
};

export default Leftnav;