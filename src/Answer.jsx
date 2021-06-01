import React, { useEffect, useState } from 'react';
import CorrectAnswer from './CorrectAnswer';

/*

*TODO*

*What question I am in.✔️
*Show correct answer and wrong answer.

*/

export default function Answer(props) {

    //const [correctAnswer, setCorrectAnswer] = useState(<CorrectAnswer />)

    const Answers = [
        { answer: ['1', '2', '5', '3'] },
        { answer: ['2', '4', '8', '5'] },
        { answer: ['12', '10', '9', '7'] },
        { answer: ['26', '20', '25', '10'] }
    ];

    function questionHandler(e) {
        if (e.target.innerHTML === '1') {
            props.setIndex(props.index + 1);
        }
        else if (e.target.innerHTML === '4') {
            props.setIndex(props.index + 1);
        }
        else if (e.target.innerHTML === '12') {
            props.setIndex(props.index + 1);
        }
        else if (e.target.innerHTML === '12') {
            props.setIndex(props.index + 1);
        }
        else if (e.target.innerHTML !== '1' || '4' || '12') {
            console.log('sas')
        }
    };

    //useEffect(() => setCorrectAnswer(<CorrectAnswer />), [])

    /*function wrongAnswersHandler() { // This function is Handler in the wrong Answers.
        Object.keys(Answer1).map((value, key) => {
            return Answer1[key].addEventListener('click', () => console.log('wrong'), { once: true })
        })
    };*/

    const TheAnswers = Answers[props.index].answer.map((value, key) => { // Returns list of the buttons with the answers.
        return (
            <li key={key} >
                <button className="Answer" name="answer" onClick={questionHandler} >
                    {value}
                </button>
                <br /><br /><br />
            </li>
        )
    });

    const correctAnswer = <CorrectAnswer />

    return (
        <React.Fragment>
            <div className="FrameAnswers">
                <ul>
                    {TheAnswers}
                </ul>
            </div>
            {correctAnswer}
        </React.Fragment>
    )
};
