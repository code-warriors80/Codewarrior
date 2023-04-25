import React from 'react'
import '../styles/Gallery.css'
import robot from '../img/hero-shape-2.webp'

const Gallery = () => {
  return (
    <section className='gallery'>
               <h2 className='heading'><img src={robot} alt='' />Our <span>Gallery</span></h2>
               <p className='top'>What Makes us unique and why should you consider using our services</p>
    </section>
  )
}

export default Gallery