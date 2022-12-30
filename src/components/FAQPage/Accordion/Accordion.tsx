import React, { useState } from 'react';
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
            <div className="accordion">
                <div className="accordion__question" onClick={() => setIsActive(!isActive)}>
                    <div id={question} className="question">
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
                    <div id={answer} className="accordion__answer" >

                        <div className="bordertop"></div>
                        <div className='answer'>{answer}</div>

                    </div>
                }
            </div>
    )
}

export default Accordion