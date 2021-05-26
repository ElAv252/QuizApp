import React from 'react';

/*export default class Question extends React.Component {
    constructor(props) {
        super(props)
        this.Questions = ['1*1', 'if 1*1 is 1, so how much is 2*2?', '3*4', '5*5'];

    }

    render() {
        return (
            <div className="MainFrame">
                <div className="FrameQuestion">
                    <p className="TheQuestion" >{this.Questions[this.props.index]}</p>
                </div>
                <div className="CorrectAnswer">
                    <p></p>
                </div>
            </div>
        )
    }
};*/

export default function Question(props) {

    const Questions = ['1*1', 'if 1*1 is 1, so how much is 2*2?', '3*4', '5*5'];
    return (
        <div className="MainFrame">
            <p className="NumberOfQuestion">{props.index + 1/*Displays the current question*/}/4</p>
            <div className="FrameQuestion">
                <p className="TheQuestion" >{Questions[props.index]}</p>
            </div>
            <div className="CorrectAnswer">
                <p></p>
            </div>
        </div>
    )
};
