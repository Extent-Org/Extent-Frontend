import React from 'react'
import { Button } from 'antd'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { RxCornerBottomLeft, RxCornerBottomRight } from 'react-icons/rx'
import './Explore.scss'

type ExploreProps = {
    tagline: string,
    title: string,
    desc: string,
    imgUrl: string,
}

const Explore = (props: ExploreProps) => {
  return (
    <div className='exp-div'>
        <div className='exp-child-1'>
            <div className='exp-txt-div'>
                <div className='exp-tagline'>{props.tagline}</div>
                <div className='exp-title-div'>
                    <div className='exp-title'>{props.title}</div>
                    <img src='/assets/images/extent-logo.png' alt='extent-logo' className='exp-logo' />
                </div>
                <div className='exp-desc'>
                    {props.desc}
                </div>
                <Button className='exp-btn'>
                    <div className='exp-btn-child-div'>
                        <div className='exp-btn-txt'>Explore</div>
                        <AiOutlineArrowRight className='exp-btn-icon' />
                    </div>
                </Button>
            </div>
            <img src={props.imgUrl} alt='become-creator' className='exp-img' />
        </div>
        <div className='exp-child-2'>
            <RxCornerBottomLeft className='exp-icon' />
            <RxCornerBottomRight className='exp-icon' />
        </div>
    </div>
  )
}

export default Explore