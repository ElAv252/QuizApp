import React, { useState } from 'react';

export default function CorrectAnswer() {

    const [value, setValue] = useState('block')


    return (
        < div className="CorrectAnswer" style={{ display: value }} onClick={() => setValue('none')}>
            <p >hello</p>
        </div >
    )
};
