import React from 'react';

export default function CorrectOrWrongAnswer(props) {  // Show the correct or wrong answer.

    function successOrFailureStatements() {
        const Success = ['Well done', 'Champion', 'Excellent',];
        const Failure = 'Wrong answer!';
        const Index = Math.floor(Math.random() * 3);

        if (props.className1 === 'CorrectAnswer') {
            if (props.index === 0) {
                return (
                    <React.Fragment>
                        <p className='successOrFailure'>{Success[Index]}</p>
                        <p className='MsgFinish'>You have successfully completed</p>
                    </React.Fragment>
                )
            } else {
                return <p className='successOrFailure'>{Success[Index]}</p>
            }
        } else {
            return <p className='successOrFailure'>{Failure}</p>
        }
    };

    return (
        < div className={props.className1} >
            {successOrFailureStatements()}
            <button className={props.className2} onClick={props.onClick} >{props.Text}</button>
        </div >
    )
};
