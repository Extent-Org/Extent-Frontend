import React from 'react'
import { Divider } from '@chakra-ui/react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-div'>
        <div className='footer-divider-div'><Divider orientation='horizontal' className='footer-divider' /></div>
        <div className='footer-content-div'>
            <div className="footer-logo-div" onClick={()=>window.scrollTo(({top:0}))}>
                <img src='/assets/images/logo/extent-logo.png' className='footer-logo-img' alt='extent-logo' />
                <h1>
                    Extent
                </h1>
            </div>
            <div className='footer-links-div'>
                <ul className='footer-list'>
                    <li className='footer-list-header'><Link to="/">Learn</Link></li>
                    <li className='footer-list-item'><Link to="/">Introduction</Link></li>
                    <li className='footer-list-item'><Link to="/">Features</Link></li>
                    <li className='footer-list-item'><Link to="/">FAQs</Link></li>
                </ul>
                <ul className='footer-list'>
                    <li className='footer-list-header'><Link to="/">Explore</Link></li>
                    <li className='footer-list-item'><Link to="/">Tokens</Link></li>
                    <li className='footer-list-item'><Link to="/">Services</Link></li>
                    <li className='footer-list-item'><Link to="/">Blogs</Link></li>
                </ul>
                <ul className='footer-list'>
                    <li className='footer-list-header'><Link to="/">Participate</Link></li>
                    <li className='footer-list-item'><Link to="/">Newsletter</Link></li>
                    <li className='footer-list-item'><Link to="/">Discord</Link></li>
                </ul>
                <ul className='footer-list'>
                    <li className='footer-list-header'><Link to="/">Resources</Link></li>
                    <li className='footer-list-item'><Link to="/">About</Link></li>
                    <li className='footer-list-item'><Link to="/">Team</Link></li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p className='footer-copyright-txt'>© 2022 Extent. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer