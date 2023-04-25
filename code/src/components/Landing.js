import React from 'react'
import '../styles/Landing.css'
import headimg from '../img/head_img7.png'
import headimgrocket from '../img/head7_rock.png'
import headline from '../img/line_r.png'
import head_shape from '../img/head_shape_l.png'
import myhead from '../img/head_shape_r.png'
import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <div className='landing'>
      <img src={head_shape} alt='' className='img2'/>
      <div className='landing-container'>
            <motion.div className='landing-text'
              initial={{x: '-100vw'}}
              animate={{x: 0}}
              transition={{delay: 1.5, type: 'spring', stiffness: 100}}
            >
                  <div className='lilhead'>
                  <img src={headline} alt='' />
                  <h5>Get Solid Solution</h5>
                  </div>
                      <h1>Choose The <br/> <span className='num1'>#01</span> <span className='it'>IT Solutions</span></h1>
                      <div>
                      <motion.button whileHover={{scale: 1.1}}>Get Started Now</motion.button>
                      </div>
              </motion.div>
              <motion.div className='landing-img'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5, duration: 3}}
              >
                  <img src={headimg} alt='' className='man'/>
                  <img src={headimgrocket} alt='' className='rocket'/>
              </motion.div>
      </div>
      <img src={myhead} alt='' className='img1'/>
    </div>
  )
}

export default Landing