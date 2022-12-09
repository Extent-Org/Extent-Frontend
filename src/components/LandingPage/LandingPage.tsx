import React, { useEffect } from 'react'
import './LandingPage.scss'
import LandingNav from '../LandingNav/LandingNav'
import LpIntro from './LpIntro/LpIntro'

const LandingPage = () => {
    const [winWidth, setWinWidth] = React.useState(window.innerWidth)
    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, [winWidth])
  return (
    <div className='lp-div'>
        <LandingNav  winWidth={winWidth} />
        <div className='lp-content-div'>
            <LpIntro />
            <LpIntro />
            <LpIntro />
            <LpIntro />
            <LpIntro />
            <LpIntro />
            <LpIntro />
            <LpIntro />
            <LpIntro />
            <LpIntro />
        </div>
        <div className='lp-footer-div'>
            
        </div>
    </div>
  )
}

export default LandingPage