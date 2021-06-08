import React, { useState } from 'react';
import CorrectOrWrongAnswer from './CorrectOrWrongAnswer';

/*

*TODO*

*What question I am in.✔️
*Show correct answer and wrong answer.✔️
*Fix: First the message of correct and wrong answer should show up and then the question and the answer will replace to next question and answer.
*Add statement that tell the user that he finished the quiz.✔️

*/

export default function Answer(props) {

    const style1 = {
        cursor: 'not-allowed',
        opacity: '50%',
        pointerEvents: 'none',
        transitionDuration: '1s',
        filter: 'blur(3px)'
    };

    const style2 = {
        cursor: 'pointer',
        opacity: '100%',
        pointerEvents: 'fill',
        transitionDuration: '1s',
        filter: 'blur(0px)'
    };

    const [correctOrWrongAnswer, setCorrectOrWrongAnswer] = useState(false);
    const [styleValue, setStyleValue] = useState();
    const [wrongOrCorrectAnswerCl, setWrongOrCorrectAnswerCl] = useState();
    const [wrongOrCorrectAnswerButtonCl, setWrongOrCorrectAnswerButtonCl] = useState();
    const [text, setText] = useState('Next')

    const Answers = [
        { answer: ['1', '2', '5', '3'] },
        { answer: ['2', '4', '8', '5'] },
        { answer: ['12', '10', '9', '7'] },
        { answer: ['26', '20', '25', '10'] }
    ];

    function changeStateForCorrectAnswer() {   // This function, changes the states value, for display that the user is click on the correct answer.
        if (props.index >= 3) {
            props.setIndex(0);  // This if and else statement give the next question.
            setText('Reset');   // That tell to the user that he finished all the questions.
        } else {
            props.setIndex(props.index + 1);
            setText('Next');
        }
        setCorrectOrWrongAnswer(true);
        setStyleValue(style1);
        setWrongOrCorrectAnswerCl("CorrectAnswer");
        setWrongOrCorrectAnswerButtonCl("CorrectAnswerButton");
    };

    function changeStates() {   // This function, changes the states value, to close the message, that tell us the user is click on the correct answer.
        setCorrectOrWrongAnswer(false);
        setStyleValue(style2);
    };

    function questionHandler(e) {
        if (e.target.innerHTML === '1') {
            changeStateForCorrectAnswer();
        }
        else if (e.target.innerHTML === '4') {
            changeStateForCorrectAnswer();
        }
        else if (e.target.innerHTML === '12') {
            changeStateForCorrectAnswer();
        }
        else if (e.target.innerHTML === '12') {
            changeStateForCorrectAnswer();
        }
        else if (e.target.innerHTML === '25') {
            changeStateForCorrectAnswer();
        }
        else if (e.target.innerHTML !== '1' || '4' || '12') {
            props.setIndex(0);  // If wrong answer, so it's return to first question.
            setCorrectOrWrongAnswer(true);
            setStyleValue(style1);
            setWrongOrCorrectAnswerCl("WrongAnswer");
            setWrongOrCorrectAnswerButtonCl("WrongAnswerButton");
            setText('Reset');
        }
    };

    const TheAnswers = Answers[props.index].answer.map((value, key) => { // Returns list of the buttons with the answers.
        return (
            <li key={key} >
                <button className="Answer" name="answer" onClick={questionHandler} style={styleValue}>
                    {value}
                </button>
                <br /><br /><br />
            </li>
        )
    });

    return (
        <React.Fragment>
            <div className="FrameAnswers">
                <ul>
                    {TheAnswers}
                </ul>
            </div>
            {correctOrWrongAnswer && <CorrectOrWrongAnswer className1={wrongOrCorrectAnswerCl}
                className2={wrongOrCorrectAnswerButtonCl} onClick={changeStates} Text={text} index={props.index} />}
        </React.Fragment>
    )
};
