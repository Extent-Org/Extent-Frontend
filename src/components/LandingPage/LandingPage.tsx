import React, { useEffect } from 'react'
import './LandingPage.scss'
import LandingNav from '../LandingNav/LandingNav'
import LpIntro from './LpIntro/LpIntro'
import Explore from './Explore/Explore'
import GrabNFT from './GrabNFT/GrabNFT'
import CreatorsAssemble from './CreatorsAssemble/CreatorsAssemble'
import Newsletter from './Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import { ChakraProvider } from "@chakra-ui/react";


const LandingPage = () => {
    const [winWidth, setWinWidth] = React.useState(window.innerWidth)
    const becomeCreator = {
        tagline: 'Publish your content and start earning...',
        title: 'Become a Creator',
        desc: 'Post / publish your creativity with us. Users can access your encrypted content via gated stream of transactions. User’s who own your NFT would be able to access the encrypted content. Post music, videos or pictures and track user engagement. Become a part of the decentralised creator economy  by signing up and showcasing some Exclusive Content with us.',
        imgUrl: '/assets/images/landing page/become-creator.png'
    }
    const followCreator = {
      tagline: "Stream exclusive creator content with on Extent...",
      title: "Follow top Creators",
      desc: "Enjoy streaming access to top creator content with us. Secure gated streams to uncover latest upload’s. Own creator NFT’s and get exclusive access to all the encrypted content. Contribute to the decentralised creator economy with us. You can enjoy music, videos and images through Extent.",
      imgUrl: "/assets/images/landing page/follow-creator.png",
    };
    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, [winWidth])
  return (
    <ChakraProvider>
      <div className="lp-div">
        <LandingNav active={1} winWidth={winWidth} />
        <div className="lp-content-div">
          <LpIntro />
          <Explore
            tagline={becomeCreator.tagline}
            title={becomeCreator.title}
            desc={becomeCreator.desc}
            imgUrl={becomeCreator.imgUrl}
          />
          <Explore
            tagline={followCreator.tagline}
            title={followCreator.title}
            desc={followCreator.desc}
            imgUrl={followCreator.imgUrl}
          />
          <GrabNFT />
          <CreatorsAssemble />
          <Newsletter />
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default LandingPage