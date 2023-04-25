import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <nav>
        <header>
          <div className='logo'>
            <h2>Code Warriors</h2>
          </div>
          <motion.ul initial={{y: -100}} animate={{y: 0}} transition={{ delay: 1.5, duration: 1, type: "spring", stiffness: 100  }}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/#about'>About</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Contact</Link></li>
          </motion.ul>

          <Link to='/profile' className='profile'>Our Profile</Link>
        </header>
    </nav>
  )
}

export default Nav