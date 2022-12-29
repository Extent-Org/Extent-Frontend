import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import "./Accordion.scss";

type AccordionProps = {
    question: string;
    answer: string;
    key: number;
}

const Accordion = (props: AccordionProps) => {
    const [isActive, setIsActive] = useState(false);
    const { question, answer } = props;

    return (
        <AnimatePresence>
            <div className="accordion">
                <div className="accordion__question" onClick={() => setIsActive(!isActive)}>
                    <div className="question">
                        Q. {question}
                    </div>
                    <div className="sign">
                        {
                            isActive ? "-" : "+"
                        }
                    </div>
                </div>
                {
                    isActive &&
                    <motion.div
                        initial={{ opacity: 0, height: "0" }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{ opacity: 0, height: "0" }}
                        className="accordion__answer"
                    >

                        <div className="bordertop"></div>
                        <div className='answer'>{answer}</div>

                    </motion.div>
                }
            </div>
        </AnimatePresence>
    )
}

export default Accordion