import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/Authprovider/Authprovider';



const Login = () => {
    const [error,setError]=useState('')
    
    const {googleProviderLogin, singinlogin,githublogin}=useContext(authContext)
   

    const provider =new GoogleAuthProvider();
    const githubprovider=new GithubAuthProvider();
    const location=useLocation();
    
    const from = location.state?.from?.pathname || '/';
    const navigate=useNavigate();
    
    
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        singinlogin(email,password)
        .then(result=>{
            const user=result.user;
          
            setError(' ')
            form.reset();
           navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
       

    }
    const handleGoogleLogin=()=>{
        googleProviderLogin(provider)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error(error)
        })
    }
    const handleGithubLogin=()=>{
        githublogin(githubprovider)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error(error)
        })

    }
    
    return (
        <Form className='mt-5 mx-auto header p-2' onSubmit={handleLogin} style={{ width: '300px' }}>
            <h4 className='text-center fw-bold headerc'>Please Login</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='headerc'>Email </Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='headerc'>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password"  required/>
        </Form.Group>
        
        <Button className='mx-auto' variant="success" type="submit">
          Login
        </Button>
        <p className='headerc'>{error}</p>
       
        <Button variant="success" className='' onClick={handleGoogleLogin} >Login With Google</Button>

        <Button variant="success" className='mt-2' onClick={handleGithubLogin} >Login With Github</Button>
        
        <p className=''>if you are not register go to <Link className=' text-white'  to='/register'>Register</Link></p>
   
      
      </Form>
    );
};

export default Login;