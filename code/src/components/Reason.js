import React from 'react'
import '../styles/Reason.css'
import code from '../img/code3d.png'
import price from '../img/price3d.png'
import message from '../img/message3d.png'
import robot from '../img/hero-shape-2.webp'

const Reason = () => {
  return (
    <section className='reason'>
               <h2 className='heading'><img src={robot} alt='' />Top <span>Reason</span></h2>
      <p className='top'>Unify your business data in one simple ecomerce dashboard</p>

      <div className='reason-container'>
        <div className='reason-parent'>
            <p><img src={code} alt='' /> Front-End Friendly</p>
            <p className='mid-p'><img src={price} alt='' /> Affordable Price</p>
            <p><img src={message} alt='' /> Quick Response</p>
        </div>
      </div>
    </section>
  )
}

export default Reason