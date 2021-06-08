import React, { useState } from 'react';
import Question from './Question';
import Answer from './Answer';

export default function StateManagement() {

    const [index, setIndex] = useState(0);

    return (
        <React.Fragment>
            <Question index={index} />
            <Answer index={index} setIndex={setIndex} />
        </React.Fragment>
    )
};
