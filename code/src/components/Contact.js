import React from 'react'
import '../styles/Contact.css'
import world from '../img/world-map.png.webp'
import loaction from '../img/7.png'
import chat from '../img/4.png'
import user from '../img/5.png'
import { motion } from 'framer-motion'
import robot from '../img/hero-shape-2.webp'


const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Contact = () => {
  return (
    <section className='contact'>
               <h2 className='heading'><img src={robot} alt='' />Get in <span>Touch</span></h2>
      <p className='top'>Your request will be responded to after 24 hours</p>
      <div className='adds'>
        <div className='myadds'>
          <p><img src={chat} alt='' /> Contactitec@gmail.com</p>
          <p className='middle'><img src={loaction} alt='' /> 85 Howord St, Toronto</p>
          <p> <img src={user} alt='' /> (+234) 07056882004</p>
        </div>
      </div>
      
      <div className='contact-container'>
        <div className='contact-parent'>
        <img src={world} alt='' />
        <div className='form'>
        <form>
          <div className='detail'>
          <input type='text' placeholder='Name'/>
          <input type='text' placeholder='Email' />
          </div>
          <div className='subjecy'>
          <input type='text' placeholder='subject'/>
          </div>
          
          <div className='textarea'>
            <textarea placeholder='How can we help You?'></textarea>
          </div>
          <motion.button variants={buttonVariants} whileHover="hover">Send</motion.button>
        </form>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact