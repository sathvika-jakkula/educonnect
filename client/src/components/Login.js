// LoginPage.js
import React , {useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import {UserContext} from '../Usercontext';

function LoginPage() {
  const [email,setEmail] = useState('');
  const [firstname,setFirstname] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const {setUserinfo} = useContext(UserContext);

  async function login(e){
      e.preventDefault();
      const response = await fetch('http://127.0.0.1:4000/login' , {
        method:'POST',
        body: JSON.stringify({email,password}),
        headers:{'Content-Type' : 'application/json'},
        credentials:'include',
      })
      console.log(response);
      if(response.ok){
        alert("login success");
        setRedirect(true);
      }else{
        alert("wrong credentials");
      }
  }

  async function login(e){
    e.preventDefault();
    
   const response = await fetch('http://127.0.0.1:4000/login', {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'},
        credentials: 'include',
    })
    if(response.ok){
      response.json().then(userinfo => {
        setUserinfo(userinfo);
        setRedirect(true);
    })
       

    }else{
        alert('wrong credentials')
    }
}

 
  if(redirect){
    return <Navigate to={'/homepage'} />
  }

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 12 }}>
      <Typography variant="h4">
        Login
      </Typography>
      <form onSubmit={login}>
        
        <TextField
        sx={{
          '& .MuiFormLabel-root':{
            marginTop:'0px',
          },
        }}
          label="Email"
          variant='standard'
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // sx={{ marginBottom: 2 }} // Example styling for the email input
        />
        <TextField
        sx={{
          '& .MuiFormLabel-root':{
            marginTop:'0px',
          },
        }}
          label="Password"
          variant='standard'
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // sx={{ marginBottom: 2 }} // Example styling for the password input
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <Typography variant="body1">
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Container>
  );
}

export default LoginPage;
