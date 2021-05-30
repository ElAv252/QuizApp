import React, { useEffect } from 'react';
import CorrectAnswer from './CorrectAnswer';



function Answer(props) {

    const Answer1 = document.getElementsByClassName('Answer');

    const Answers = [
        { answer: ['1', ' 2', '4', '3'] },
        { answer: ['2', '4', '8', '5'] },
        { answer: ['12', '10', '9', '7'] },
        { answer: ['26', '20', '25', '10'] }
    ];

    function correctAnswersHandler() { // This function is Handler in the correct Answers.
        if (props.index < 3) {
            props.setIndex(props.index + 1);
        } else {
            props.setIndex(3);
        }
    };

    function wrongAnswersHandler() { // This function is Handler in the wrong Answers.
        Object.keys(Answer1).map((value, key) => {
            return Answer1[key].addEventListener('click', () => console.log('wrong'), { once: true })
        })
    };

    function NextQuestion() { // This function, is give the next question.
        if (Answer1[0].innerHTML === '1') {

            Answer1[0].addEventListener('click', correctAnswersHandler, { once: true })
            wrongAnswersHandler()

        } else if (Answer1[1].innerHTML === '4') {

            Answer1[1].addEventListener('click', correctAnswersHandler, { once: true })
            wrongAnswersHandler()

        } else if (Answer1[0].innerHTML === '12') {

            Answer1[0].addEventListener('click', correctAnswersHandler, { once: true })
            wrongAnswersHandler()

        } else if (Answer1[2].innerHTML === '25') {

            wrongAnswersHandler()
            Answer1[2].addEventListener('click', correctAnswersHandler, { once: true })

        }
    }

    useEffect(NextQuestion)

    const theAnswers = Answers[props.index].answer.map((value, key) => { // Returns list of the buttons with the answers.
        return (
            <li key={key} >
                <button className="Answer" name="answer">
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
                    {theAnswers}
                </ul>
            </div>
            <CorrectAnswer />
        </React.Fragment>
    )
};
