import React from 'react'
import { Button } from 'antd'
import './LpIntro.scss'

const LpIntro = () => {
  function isSmall(){
    if(window.innerWidth<=820){
      return true
    }else return false
  }
  return (
    <div className='lp-intro-div'>
        <div className='lp-intro-txt-1'>Stream Exclusive Content</div>
        <div className='lp-intro-txt-2'>The Decentralised Content<br/> Streaming Platform.</div>
        <div className='lp-intro-txt-3'>Extent is a content platform to incentivize creators, build for our<br/> decentralized future.</div>
        <div className='lp-intro-btn-div'>
            <Button type='primary' className='btn-1'>Join Us</Button>
            <Button type='primary' className='btn-2'>How it works?</Button>
        </div>
        <div className='lp-plane-div'>
          <img src='/assets/images/lp-plane-vec.svg' alt='plane-vec' className='lp-plane-img' />
        </div>
    </div>
  )
}

export default LpIntro