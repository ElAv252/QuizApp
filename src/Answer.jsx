import React, { useEffect } from 'react';

/*export default class Answer extends React.Component {


    constructor(props) {
        super(props)

        this.Answers = [
            { answer: ['1', ' 2', '4', '3'] },
            { answer: ['2', '4', '8', '5'] },
            { answer: ['12', '10', '9', '7'] },
            { answer: ['26', '20', '25', '10'] }
        ];

        this.Answer1 = document.getElementsByClassName('Answer');

        this.theAnswers = this.Answers[this.props.index].answer.map((value, key) => {
            return <li key={key} >
                <button className="Answer" name="answer">
                    {value}
                </button>
                <br /><br /><br />
            </li>
        });
    };

    componentDidMount = () => {
        this.props.setIndex({ index: this.props.index + 1 });
    }

    shouldComponentUpdate = () => {
        return true;
    }

    stateHandler = () => {
        if (this.props.index >= 3) {
            this.props.setIndex({ index: 3 });  //check this, because maybe it's the problem.
        } else {
            this.props.setIndex({ index: this.props.index + 1 });
            console.log(this.props.index)
        }
    };

    componentDidUpdate = () => {
        if (this.Answer1[0].innerHTML === '1') {
            this.Answer1[0].addEventListener('click', () => {
                this.stateHandler()
            })
        } else if (this.Answer1[1].innerHTML === '4') {
            this.Answer1[1].addEventListener('click', () => {
                this.stateHandler()
            })
        } else if (this.Answer1[0].innerHTML === '12') {
            this.Answer1[0].addEventListener('click', () => {
                this.stateHandler()
            })
        } else if (this.Answer1[2].innerHTML === '25') {
            this.Answer1[2].addEventListener('click', () => {
                this.stateHandler()
            })
        }
    }

    render() {
        return (
            <div className="Frameanswers">
                <ul>
                    {this.theAnswers}
                </ul>
            </div>
        )
    }
}
*/

/*

*TODO*

*What question I am in.✔️
*Show correct answer and wrong answer.
*Need to cancel the setTimeout, and to find another solution.✔️
*Need to find solution for correctAnswersHandler and wrongAnswerHandler, inside the if statement.

*/

export default function Answer(props) {

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

    function wrongAnswerHandler() { // This function is Handler in the wrong Answers.
        Object.keys(Answer1).map((value, key) => {
            return Answer1[key].addEventListener('click', () => console.log('wrong'), { once: true })
        })
    };

    function NextQuestion() { // This function, is give the next question.
        if (Answer1[0].innerHTML === '1') {

            Answer1[0].addEventListener('click', correctAnswersHandler, { once: true })
            wrongAnswerHandler()

        } else if (Answer1[1].innerHTML === '4') {

            Answer1[1].addEventListener('click', correctAnswersHandler, { once: true })
            wrongAnswerHandler()

        } else if (Answer1[0].innerHTML === '12') {

            Answer1[0].addEventListener('click', correctAnswersHandler, { once: true })
            wrongAnswerHandler()

        } else if (Answer1[2].innerHTML === '25') {

            wrongAnswerHandler()
            Answer1[2].addEventListener('click', () => console.log('11'), { once: true })
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
        <div className="FrameAnswers">
            <ul>
                {theAnswers}
            </ul>
        </div>
    )
};