import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-scroll';
import {Navigate} from 'react-router-dom'
import {UserContext} from '../Usercontext'
import Navbar2 from './Navbar2';
import logo from '../images/IMG-20240224-WA0002.jpg';


export default function Navbar() {
    const [nav,setnav] = useState(false);
    const {userinfo,setUserinfo,isloading} = useContext(UserContext);
    const userid = userinfo?.id || userinfo?._id;

    if(isloading){
        return <div>Loading....</div>
    }

    const changebackground = () => {
        if(window.screenY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }   
    }

    // useEffect(() => {
    //     fetch('http://127.0.0.1:4000/profile', {
    //         credentials: 'include'
    //     }).then(res => {
    //         // console.log(res);
    //         res.json().then(userinfo => {
    //             setUserinfo(userinfo);
    //             // console.log(userinfo.username);  Use userinfo.username here
    //         });
    //     });
    // }, []);

    function logout() {
        fetch('http://127.0.0.1:4000/logout', {
            credentials: 'include',
            method: 'POST'
        })
            setUserinfo(null);
            // You might want to redirect the user here if needed
      }


      const email = userinfo?.email;

    window.addEventListener('scroll',changebackground);
  return (
    <nav className={nav ? 'nav':'nav active'}>
       
    <Link to='/' className='logo'>
        <img src={logo} alt='' />
    </Link>
    
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
             <span className='nav-icon'></span>
        </label>
        {!nav && 
            (!email && <>
                <ul className='menu'>
                    <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
                    <li><Link to='about' smooth={true} duration={1000}>Overview</Link></li>
                    <li><Link to='contact' smooth={true} duration={1000}>Contact Us</Link></li>
                
                </ul> 
        </>
       )}

    {!nav && 
            (email && <>
                <ul className='menu'>
                {/* <li><Link to='/upload' smooth={true} duration={1000}>Create</Link></li>
               
                
                 <li><Link onClick={logout}>Logout</Link></li>
                    <li><Link  smooth={true} duration={1000}>Your profile</Link></li>
                    {/* <li><Link to='contact' smooth={true} duration={1000}>Contact Us</Link></li> */}
                <Navbar2 />
                </ul>       
        </>
      )} 
       



    
</nav>  
  )
}
