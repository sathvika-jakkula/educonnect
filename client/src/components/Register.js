// RegisterPage.js
import React , {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';

// const RegisterPage = () => {
//   const [firstname,setFirstname] = useState('');
//   const [email,setEmail] = useState('');
//   const [password,setPassword] =  useState('');

//     async function register(e){
//       e.preventDefault();
      // const response = await fetch('http://127.0.0.1:4000/register' , {
      //   method: 'POST',
      //   body:JSON.stringify({firstname,email,password}),
      //   headers: {'Content-Type' : 'application/json'},
      //   credentials:'include'
      // })
      // console.log(response);
      // if(response.ok){
      //   alert('registration succsess');
      // }else{
      //   alert('registration failed');
      // }
  //   }


  // return (
  //   <Container maxWidth="sm" sx={{ paddingTop: 12 }}>
  //     <Typography variant="h4" gutterBottom>
  //       Register
  //     </Typography>
  //     <form onSubmit={register}>
        {/* <TextField label="Username" sx={{
          '& .MuiFormLabel-root':{
            marginTop:'0px',
          },
        }} fullWidth margin="normal" value={firstname} onChange={e => setFirstname(e.target.value)}/>
        <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
        {/* <Button type="submit" variant="contained" color="primary"> */}
          {/* Register
        </Button>
      </form>
      <Typography variant="body1" marginTop="20px">
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

// export default RegisterPage; */} 

// ... (imports)

const RegisterPage = () => {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');

  async function register(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:4000/register', {
        method: 'POST',
        body: JSON.stringify({ firstname, email, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        alert('Registration successful');
        setRedirect(true);
      } else {
        const errorMessage = await response.text();
        setError(errorMessage || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if(redirect){
    return <Navigate to={'/login'} />
  }

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 12 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      <form onSubmit={register}>
        {/* ... (other form fields) */}
        <TextField sx={{
          '& .MuiFormLabel-root':{
            marginTop:'0px',
          },
        }} label="Username" fullWidth margin="normal" value={firstname} onChange={e => setFirstname(e.target.value)}/>
        <TextField sx={{
          '& .MuiFormLabel-root':{
            marginTop:'0px',
          },
        }} label="Email" type="email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField sx={{
          '& .MuiFormLabel-root':{
            marginTop:'0px',
          },
        }} label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </form>
      <Typography variant="body1" marginTop="20px">
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default RegisterPage;

