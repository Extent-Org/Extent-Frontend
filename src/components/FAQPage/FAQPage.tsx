import React, { useState, useEffect } from 'react';
import LandingNav from '../LandingNav/LandingNav';
import { ChakraProvider } from '@chakra-ui/react';
import Accordion from './Accordion/Accordion';
import "./FAQPage.scss";
import faq from "./Data/data";

const FAQPage = () => {
    const [winWidth, setWinWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, [winWidth]);

    return (
        <div className="faq">
            <ChakraProvider>
                <LandingNav active={2} winWidth={winWidth} />
            </ChakraProvider>
            <div className="faq__wrap">
                <div className="faq__wrapper">
                    <div className='faq__title'>FAQ's</div>
                    <div className="faq__list">
                        {
                            faq.map((item, idx: number) => {
                                return (
                                        <Accordion key={idx} question={item.question} answer={item.answer} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FAQPage