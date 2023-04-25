import React from 'react'
import Boost from '../components/Boost';
import Reason from '../components/Reason';
import High from '../components/High';
import Service from '../components/Service';
import Landing from '../components/Landing'
import Contact from '../components/Contact';
import About from '../components/About';

// reveal
import Zoom from 'react-reveal/Zoom'



const Home = () => {

  return (

               <div  >
                              <Landing />
                              <Zoom>
                                  <Reason />
                              </Zoom>
                                <Zoom>
                                     <Boost />
                                </Zoom>
                                  <About />
                                  <Service />

                                  <High />

                              <Zoom>
                              <Contact />
                              </Zoom>
               </div>
  )
}

export default Home