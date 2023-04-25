import React, { useEffect, useRef, useState } from 'react'
import '../styles/Service.css'
import webdev from '../img/18.png'
import appdev from '../img/16.png'
import emaildev from '../img/14.png'
import notificationdev from '../img/15.png'
import socialdev from '../img/17.png'
import {motion} from 'framer-motion'
import robot from '../img/hero-shape-2.webp'
import Zoom from 'react-reveal/Zoom'


const Service = () => {
  const [width, setwidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    <section className='service'>
                   <Zoom>
                     <h2 className='heading'><img src={robot} alt='' />Our Top <span> Service </span></h2>
                    <p className='top'>Natero intergrate with popular apps. Help you easy to connect and collaborate</p>
                    </Zoom>
      <div className='service-container'>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='service-parent'>
          <Zoom>
            <motion.div className='box box-1' >
                      <img src={emaildev} alt='' />
                      <h3>Email Marketing</h3>
                      <p> Optimize your website on google result with PC Marketing</p>
              </motion.div>
          </Zoom>

          <Zoom>
          <motion.div className='box box-2'>
                <img src={appdev} alt='' />
                  <h3>App Development</h3>
                  <p>Optimize your website on google result with PPC Marketing</p>
          </motion.div>
          </Zoom>

          <Zoom>
          <motion.div className='box box-3'>
              <img src={webdev} alt='' />
                <h3>Web Development</h3>
                <p>You can provide the answers that your potential customers are trying to find, so you can become the industery</p>
          </motion.div>
          </Zoom>

          <Zoom>
          <motion.div className='box box-4'>
                <img src={notificationdev} alt='' />
                  <h3>Upgrade</h3>
                  <p> Get more website traffic, more customers & more online visibility with powerful SEO services</p>
          </motion.div>
          </Zoom>

          <Zoom>
          <motion.div className='box box-5'>
            <img src={socialdev} alt='' />
              <h3>Debuging</h3>
              <p> Get more website traffic, more customers & more online visibility with powerful SEO services</p>
          </motion.div>
          </Zoom>
        </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Service