import React from 'react'
import { Button } from '@chakra-ui/react'
import './LpIntro.scss'

const LpIntro = () => {
  return (
    <div className='lp-intro-div'>
        <div className='lp-intro-txt-1'>Stream Exclusive Content</div>
        <div className='lp-intro-txt-2'>The Decentralised Content<br/> Streaming Platform.</div>
        <div className='lp-intro-txt-3'>Extent is a content platform to incentivize creators, build for our<br/> decentralized future.</div>
        <div className='lp-intro-btn-div'>
            <Button colorScheme='blackAlpha' size='lg' className='btn-1'>Join Us</Button>
            <Button colorScheme='blackAlpha' size='lg' className='btn-2'>How it works?</Button>
        </div>
        <div className='lp-plane-div'>
          <img src='/assets/images/landing page/lp-plane-vec.svg' alt='plane-vec' className='lp-plane-img' />
        </div>
    </div>
  )
}

export default LpIntro