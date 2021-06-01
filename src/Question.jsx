import React from 'react';

export default function Question(props) {

    const Questions = ['1*1', 'if 1*1 is 1, so how much is 2*2?', '3*4', '5*5'];
    return (
        <div className="MainFrame">
            <p className="NumberOfQuestion">{props.index + 1/*Displays the current question*/}/4</p>
            <div className="FrameQuestion">
                <p className="TheQuestion" >{Questions[props.index]}</p>
            </div>
        </div>
    )
};
