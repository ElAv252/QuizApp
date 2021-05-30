import React from 'react';

export default function CorrectAnswer() {

    const CorrectAnswer = document.getElementsByClassName('CorrectAnswer')[0];
    if (CorrectAnswer) {
        CorrectAnswer.style.display = 'block';
    }
    return (
        < div className="CorrectAnswer" onClick={() => {
            CorrectAnswer.style.display = 'none'
        }}>
            <p >fdg</p>
        </div >
    )

};