import React from 'react'
import { Button } from 'antd'
import './LpIntro.scss'
import { motion } from 'framer-motion'

const LpIntro = () => {
  function isSmall(){
    if(window.innerWidth<=820){
      return true
    }else return false
  }

  const container={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.4
      }
    }
  }

  const item={
    hidden:{
      opacity:0,
      y:30,
      // x:15
    },
    visible:{
      opacity:1,
      y:0,
      // x:0,
      transition:{
        duration:1
      }
    }
  }
  return (
    <motion.div className='lp-intro-div' variants={container} initial={"hidden"} whileInView={"visible"} viewport={{once:true}}>
        <motion.div variants={item} className='lp-intro-txt-1'>Stream Exclusive Content</motion.div>
        <motion.div variants={item} className='lp-intro-txt-2'>The Decentralised Content<br/> Streaming Platform.</motion.div>
        <motion.div variants={item} className='lp-intro-txt-3'>Extent is a content platform to incentivize creators, build for our<br/> decentralized future.</motion.div>
        <motion.div variants={item} className='lp-intro-btn-div'>
            <Button type='primary' className='btn-1'>Join Us</Button>
            <Button type='primary' className='btn-2'>How it works?</Button>
        </motion.div>
        <motion.div className='lp-plane-div' initial={{ x: isSmall() ? 0 :  -900}} whileInView={{x:0,y:0,opacity:1}} viewport={{once:true}} transition={{duration:4}}>
          <img src='/assets/images/lp-plane-vec.svg' alt='plane-vec' className='lp-plane-img' />
        </motion.div>
    </motion.div>
  )
}

export default LpIntro