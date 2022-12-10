import React from 'react'
import './GrabNFT.scss'
import { RxCornerBottomLeft, RxCornerBottomRight } from 'react-icons/rx'

const GrabNFT = () => {
  return (
    <div className='gnft-div'>
        <div className='gnft-content-div'>
            <div className='gnft-tagline'>Get exclusive NFT for your favorite creators</div>
            <div className='gnft-title'>You can only access the encrypted content<br/> with cool NFT’s</div>
            <div className='gnft-img-div'>
                {/* <div className='gnft-img-stack'>
                    <img src="/assets/images/grab-nft.png" alt="grab-nft" className='gnft-creator-nft-img' />
                    <img src="/assets/images/grab-nft-vertical-card.png" alt="grab-nft-vertical" className='gnft-card-img-1' />
                    <img src="/assets/images/grab-nft-vertical-card.png" alt="grab-nft-vertical" className='gnft-card-img-2' />
                </div> */}
                <div className='gnft-img-stack'>
                    <img src="/assets/images/grab-nft-creator.png" alt="creator-card" className='gnft-creator-img' />
                </div>
                <div className='gnft-token-div-0'>
                    <div className='gnft-token-div-1'>
                        <div className='gnft-token-div-2'>
                            <img src='/assets/images/grab-nft-token.png' alt='nft-token' className='gnft-token-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='gnft-braces-div'>
            <RxCornerBottomLeft className='gnft-braces-icon' />
            <RxCornerBottomRight className='gnft-braces-icon' />
        </div>
    </div>
  )
}

export default GrabNFT