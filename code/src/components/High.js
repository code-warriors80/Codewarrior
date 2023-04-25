import React from 'react'
import '../styles/High.css'
import vector1 from '../img/vector1.png'
import vector2 from '../img/vector2.png'
import Zoom from 'react-reveal/Zoom'

const High = () => {
  return (
<section className="boxs" >
               <div className='high-container'>
               <img src={vector1} alt='' className='vector1'/>
               <div className='high-text'>
                  <Zoom><h4>Hire us for your project</h4></Zoom>
                  <Zoom><h2>Let's Work Together</h2></Zoom>
                  <Zoom><a href='/'>Higher Us</a></Zoom>               
               </div>
               <img src={vector2} alt='' className='vector2'/>
               </div>
</section>
  )
}

export default High