import React, { useEffect, useRef, useState } from 'react'
import '../styles/Team.css'
import robot from '../img/hero-shape-2.webp'
import {motion} from 'framer-motion'
import img from '../img/Vanessa.jpg'

const Team = () => {
               const [width, setwidth] = useState(0)
               const carousel = useRef()
             
               useEffect(() => {
                 setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
               }, [])
  return (
    <section className='team'>
                <h2 className='heading'><img src={robot} alt='' />Talented <span>Team</span></h2>
               <p className='top'>What Makes us unique and why should you consider using our services</p>
               <div className='team-container'>
                              <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                              <motion.div className='team-parent' drag="x" dragConstraints={{right: 0, left: -width}}>
                                             <motion.div className='teambox'>
                                                            <img src={img} alt='' />
                                                            <h3>Abdulrahman Sadiq</h3>
                                                            <p>CEO & Founder</p>
                                                            <div></div>
                                             </motion.div>

                                             <motion.div className='teambox'>
                                                            <img src={img} alt='' />
                                                            <h3>Muctar Mohammed</h3>
                                                            <p>CEO & Founder</p>
                                                            <div></div>
                                             </motion.div>

                                             <motion.div className='teambox'>
                                                            <img src={img} alt='' />
                                                            <h3>Vanessa Odidi</h3>
                                                            <p>CEO & Founder</p>
                                                            <div></div>
                                             </motion.div>

                                             <motion.div className='teambox'>
                                                            <img src={img} alt='' />
                                                            <h3>David Tony Ibok</h3>
                                                            <p>CEO & Founder</p>
                                                            <div></div>
                                             </motion.div>

                                             
                                             <motion.div className='teambox'>
                                                            <img src={img} alt='' />
                                                            <h3>Sadia Abdulrahman</h3>
                                                            <p>CEO & Founder</p>
                                                            <div></div>
                                             </motion.div>

                                             <motion.div className='teambox'> 
                                                            <img src={img} alt='' />
                                                            <h3>Ayomide Ezekial</h3>
                                                            <p>CEO & Founder</p>
                                                            <div></div>
                                             </motion.div>
                              </motion.div>
                              </motion.div>
               </div>
    </section>
  )
}

export default Team