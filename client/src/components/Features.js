import React from 'react'
import Featurebox from './Featurebox'
import first from '../images/first.jpg'
import second from '../images/second.jpg'
import third from '../images/third.jpg'
import fourth from '../images/fourth.jpg'
function Features() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox  title = "{qwertyuifdv}" image = {first}/>
            <Featurebox  title = "{qwertyuisdfgr}"  image = {second}/>
            <Featurebox  title = "{qwertyuiwergt4}" image = {third}/>
            <Featurebox  title = "{qwertyuicsdfgt}" image = {fourth}/>
        </div>
     </div>
  )
}

export default Features