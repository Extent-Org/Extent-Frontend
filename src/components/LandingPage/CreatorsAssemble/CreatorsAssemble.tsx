import React from 'react'
import { RxCornerBottomLeft, RxCornerBottomRight } from 'react-icons/rx';
import './CreatorsAssemble.scss'
import { motion } from 'framer-motion';

const CreatorsAssemble = () => {

    const fileTypes = [
        {
            type: "Video",
            desc: "You can publish your latest creativity hack in form of a Video file format. Broadcast your imagination to the decentralised world with us.",
            imgUrl: "/assets/images/lp-video-icon.png"
        },
        {
            type: "Songs",
            desc: "Unleash your musical talents from the bottom of your heart to the decentralised listeners in form of soft melodies and some Rock ‘n Roll.",
            imgUrl: "/assets/images/lp-audio-icon.png"
        },
        {
            type: "Pictures",
            desc: "Showcase your artistic inspiration in form of pictures to the decentralised audience.",
            imgUrl: "/assets/images/lp-picture-icon.png"
        }
    ];

    const fileTypesList = fileTypes.map((fileType, index) => {
        return (
            <motion.div className='cass-file-type-div' key={index} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: index <= 2 ? index + 0.5 : 0.5, duration: 1 }} >
                <img src={fileType.imgUrl} alt={fileType.type} className='cass-file-type-img' />
                <div className='cass-file-type-title'>{fileType.type}</div>
                <div className='cass-file-type-desc'>{fileType.desc}</div>
            </motion.div>
        )
    });

  return (
    <div className='cass-div'>
        <div className='cass-content-div'>
            <div className='cass-tagline'>Showcase your inner creativity</div>
            <div className='cass-title'>Creators let’s assemble</div>
            <div className='cass-file-types'>
                {fileTypesList}
            </div>
        </div>
        <div className='cass-braces-div'>
            <RxCornerBottomLeft className='exp-icon' />
            <RxCornerBottomRight className='exp-icon' />
        </div>
    </div>
  )
}

export default CreatorsAssemble