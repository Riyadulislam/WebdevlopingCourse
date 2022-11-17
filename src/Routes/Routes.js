import { Card } from "react-bootstrap";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Error from "../Pages/shared/Error";
import Allcourse from "../Pages/shared/Mainpages/Allcourse";
import Blog from "../Pages/shared/Mainpages/Blog";
import Course from "../Pages/shared/Mainpages/Course";
import Detailspage from "../Pages/shared/Mainpages/Detailspage";

import Faq from "../Pages/shared/Mainpages/Faq";
import Home from "../Pages/shared/Mainpages/Home";
import Infocourse from "../Pages/shared/Mainpages/Infocourse";
import Primium from "../Pages/shared/Mainpages/Primium";
import PrivateRoute from "./PrivateRoute";


 export const router =createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
     errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allcourse',
            element:<Allcourse></Allcourse>
        },
        {
            path:'/course',
            element:<Course></Course>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/faq',
            element:<Faq></Faq>
        },
        {
            path:'/info',
            element:<Infocourse></Infocourse>
        },
        {
            path:'/card',
            element:<Card></Card>
        },
        {
            path:'/info/:id',
            element:<Detailspage></Detailspage>,
            loader:({params})=>fetch(`https://web-dev-learning-course-server.vercel.app/course/${params.id}`)
            
        },
        {
            path:'/primium/:id',
            element:<PrivateRoute><Primium></Primium></PrivateRoute>,
            loader:({params})=>fetch(`https://web-dev-learning-course-server.vercel.app/course/${params.id}`)
        
        }
     
    ]
}
])