import React ,{useState,useEffect} from 'react'
// import './Searchbar.css'


export default function Sidebar({ onSidebarChange }) {

  const [posts , setPosts] = useState([]);
  const [recods,setRecords] = useState([]);
  const [sidebarValue, setSidebarValue] = useState('');
  
  const handleSidebarChange = (category) => {
    console.log(category);
    setSidebarValue(category);
    // Pass the value back to the parent component using the provided callback
    onSidebarChange(category);
  }


  return (
    <>
        <div className='sidebar'>
          
        <button onClick={() => handleSidebarChange('webdevelopment')} className='sidebar-button'>Web Development</button>
        <button onClick={() => handleSidebarChange('Artificial Intelligence')} className='sidebar-button'>Artificial Intelligence</button>
        <button onClick={() => handleSidebarChange('Full Stack')} className='sidebar-button'>Full Stack</button>
        <button onClick={() => handleSidebarChange('Machine Learning')} className='sidebar-button'>Machine Learning</button>
        <button  onClick={() => handleSidebarChange('Php')} className='sidebar-button'>Php</button>
        <button onClick={() => handleSidebarChange('IOT')} className='sidebar-button'>IOT</button>
        <button onClick={() => handleSidebarChange('Python')} className='sidebar-button'> Python</button>
        <button onClick={() => handleSidebarChange('MERN Stack')} className='sidebar-button'>MERN Stack</button>
        <button onClick={() => handleSidebarChange('Dotnet')} className='sidebar-button'>Dotnet</button>
        <button onClick={() => handleSidebarChange('Data Science')} className='sidebar-button'>Data Science</button>
        <button onClick={() => handleSidebarChange('Blockchain')} className='sidebar-button'>Blockchain</button>
        <button onClick={() => handleSidebarChange('Java')} className='sidebar-button'>Java</button>
        <button onClick={() => handleSidebarChange('Database')} className='sidebar-button'>Database </button>
        <button onClick={() => handleSidebarChange('Robotics')} className='sidebar-button'>Robotics</button>
        <button onClick={() => handleSidebarChange('VLSI')} className='sidebar-button'>VLSI</button>
        <button onClick={() => handleSidebarChange('Embedded Systems')} className='sidebar-button'>Embedded Systems</button>
        <button onClick={() => handleSidebarChange('UI/UX')} className='sidebar-button'>UI/UX</button>
        <button onClick={() => handleSidebarChange('Others')} className='sidebar-button' >Others</button>
        <button onClick={() => handleSidebarChange('UI/UX')} className='sidebar-button'>UI/UX</button>
        <button onClick={() => handleSidebarChange('Others')} className='sidebar-button' >Others</button>
        <button onClick={() => handleSidebarChange('UI/UX')} className='sidebar-button'>UI/UX</button>
        <button onClick={() => handleSidebarChange('Others')} className='sidebar-button' >Others</button>
        <button onClick={() => handleSidebarChange('UI/UX')} className='sidebar-button'>UI/UX</button>
        <button onClick={() => handleSidebarChange('Others')} className='sidebar-button' >Others</button>
        <button onClick={() => handleSidebarChange('UI/UX')} className='sidebar-button'>UI/UX</button>
        <button onClick={() => handleSidebarChange('Others')} className='sidebar-button' >Others</button>
        <button onClick={() => handleSidebarChange('UI/UX')} className='sidebar-button'>UI/UX</button>
        <button onClick={() => handleSidebarChange('Others')} className='sidebar-button' >Others</button>
        
    
        </div>
        <div className='menufilter'>

        <select value={sidebarValue} onChange={(e) => handleSidebarChange(e.target.value)}>
  <option value="">filter</option>
  <option value="Webdevelopment">Web Development</option>
  <option value="AI">Artificial Intelligence</option>
  <option value="Full Stack">Full Stack</option>
  <option value="Machine Learning">Machine Learning</option>
  <option value="Php">Php</option>
  <option value="IOT">IOT</option>
  <option value="Python">Python</option>
  <option value="MERN Stack">MERN Stack</option>
  <option value="Others">Others</option>
</select>

        </div>
        </>
  )
}