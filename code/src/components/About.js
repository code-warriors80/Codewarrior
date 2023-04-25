import React from 'react'
import '../styles/About.css'
import vision from '../img/22.png'
import mission from '../img/23.png'
import about from '../img/fe4.png'
import ourteam from '../img/head.png'
import robot from '../img/hero-shape-2.webp'
import Zoom from 'react-reveal/Zoom'

const About = () => {
  return (
    <secton className='about'>
        <Zoom>
        <h2 className='heading'><img src={robot} alt='' /> About Our <span>Team</span></h2>
      <p className='top'>What Makes us unique and why should you consider using our services</p>
      </Zoom>
      <div className='aboutus'>
        <div className='aboutus-container'>
          <Zoom>
            <img src={ourteam} alt='' />
          </Zoom>

            <Zoom>
                <div className='aboutus-text'>
                          <h3>Offering the best IT services to  <span>Our Clients</span></h3>
                                                <p>Like any great agency, we are only as good as the result we deliver of our recent work.
                                                                Our developers are commited to maintaining the highest web standards so that your site will withstand the test of time
                                                </p>
                                                <a href='/'>About Us</a>
                </div>
            </Zoom>
        </div>
      </div>
      <div className='about-container'>
        <div className='about-parent'>
          <Zoom>
              <div className='about-box'>
                  <img src={vision} alt='' />
                  <h3>Our Mission</h3>
                  <p>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente labore molestias, expedita mollitia quo quos corporis placeat est nesciunt! Quas dicta reiciendis debitis numquam veritatis ex eaque cupiditate quasi? Dolores.</p>
              </div>
          </Zoom>

          <Zoom>
          <div className='about-box'>
              <img src={mission} alt='' />
              <h3>Our Vision</h3>
              <p>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente labore molestias, expedita mollitia quo quos corporis placeat est nesciunt! Quas dicta reiciendis debitis numquam veritatis ex eaque cupiditate quasi? Dolores.</p>
          </div>
          </Zoom>
          <Zoom>
          <div className='about-box'>
              <img src={about} alt='' />
              <h3>Our Objective</h3>
              <p>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente labore molestias, expedita mollitia quo quos corporis placeat est nesciunt! Quas dicta reiciendis debitis numquam veritatis ex eaque cupiditate quasi? Dolores.</p>
          </div>
          </Zoom>
        </div>
      </div>
    </secton>
  )
}

export default About