import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='main'>
      <div className='header-heading'>
        <h1>Get<span> Started With</span></h1>
        <div className='header-btns'>
          {/* Link to the "/login" route */}
          <Link to="/login" className='header-btn'>Login</Link>
          
          {/* Link to the "/register" route */}
          <Link to="/register" className='header-btn'>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
