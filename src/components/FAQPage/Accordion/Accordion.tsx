import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
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
        <div className="accordion" onClick={() => setIsActive(!isActive)}>
            <div className={`accordion__question ${isActive ? "accordion__question--opened" : ""}`}>
                <div className="accordion__question-q">
                    Q. {question}
                </div>
                <div className="accordion__question-sign">
                    {
                        isActive ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </div>
            </div>
            <div className={`accordion__answer ${isActive ? "accordion__answer--opened" : ""}`}>
                <div className="accordion__answer-wrap">
                    <div className="accordion__answer-sep"></div>
                    <div className="accordion__answer-ans">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion