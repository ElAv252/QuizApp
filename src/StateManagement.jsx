import React, { useState } from 'react';
import Question from './Question';
import Answer from './Answer';

/*export default class StateManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 }
    }

    setIndex = () => {
        this.setState({ index: this.state.index + 1 })
    }

    render() {
        return (
            <React.Fragment>
                <Question index={this.state.index} />
                <Answer index={this.state.index} setIndex={this.setIndex} />
            </React.Fragment >
        )
    }*/

export default function StateManagement() {

    const [index, setIndex] = useState(0);

    return (
        <React.Fragment>
            <Question index={index} />
            <Answer index={index} setIndex={setIndex} />
        </React.Fragment>
    )
};
