import React from 'react'
import '../styles/Boost.css'
import flyer from '../img/superman_3d.png'

const Boost = () => {
  return (
    <section className='boost'>
               <div className='boost-container'>
                              <div className='boost-text'>
                                             <h3>Boost Your Business up to a <span>High Level</span></h3>
                                             <p>Like any great agency, we are only as good as the result we deliver of our recent work.
                                                            Our developers are commited to maintaining the highest web standards so that your site will withstand the test of time
                                             </p>
                              </div>
                              <img src={flyer} alt=''/>
               </div>
    </section>
  )
}

export default Boost