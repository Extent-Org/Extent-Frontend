import React, { useState, useEffect } from 'react';
import LandingNav from '../LandingNav/LandingNav';
import { ChakraProvider } from '@chakra-ui/react';
import "./RefuelPage.scss";
import Footer from '../Footer/Footer';

const RefuelPage = () => {
    const [winWidth, setWinWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, [winWidth]);

    return (
        <div className="refuel">
            <ChakraProvider>
                <LandingNav active={0} winWidth={winWidth} />
            </ChakraProvider>
            <div className='refuel__wrapper'>
                <div className="refuel__borders">
                    <div className="corner-borders corner-borders--left"></div>
                    <div className="corner-borders corner-borders--right"></div>
                    <div className="refuel__token">
                        <div className="refuel__token-top">
                            <div>
                                <h3>Wrap your DAI tokens</h3>
                                <h1>Wrap your tokens here.</h1>
                            </div>
                            <span>
                                300.003
                                <img src="/assets/images/icons/daitokenimg.png" alt="Token" />
                            </span>
                        </div>
                        <img src="/assets/images/icons/refuelrocket.svg" alt="Refuel" />
                        <input type="number" name="daitoken" id="daitoken" placeholder='Enter amount of Tokens' min={0.0001} step={0.0001} required />
                        <button>Wrap</button>
                    </div>
                </div>
            </div>
            <ChakraProvider>
                <Footer />
            </ChakraProvider>
        </div>
    );
}

export default RefuelPage;