import React, {Component} from "react";
import Question from "./Question";
import {Button, Form, Label} from "reactstrap";

class Wizard extends Component {
    state = {
        firstName: '',
        selectedChoices: {}
    };

    handleSubmit = (event) => {
        event.preventDefault();

        debugger;
    };

    handleNameChange = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    };

    handleChoiceChange = (event) => {
        // Must set these values because the event is pooled. The event object will be null inside the setState function argument.
        // See https://facebook.github.io/react/docs/events.html#event-pooling
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => {
            prevState.selectedChoices[name] = value;
            return prevState;
        })
    };

    render() {
        return (
            <div className="quiz-container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Resume Type</h1>
                    </div>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <div className="row" id="questions">
                        {this.props.questions.map((question) => {
                            return <Question key={question.id}
                                             id={question.id}
                                             text={question.text}
                                             choices={question.choices}
                                             selectedChoiceValue={this.state.selectedChoices[question.id]}
                                             handleChange={this.handleChoiceChange}/>;
                        })}
                    </div>
                    <div className="row">
                        <Label>
                            <input type="text" className="form-control"
                                   placeholder="Enter Full Name"
                                   onChange={this.handleNameChange}
                                   value={this.state.firstName}/>
                        </Label>
                        <Button type="submit" className="btn">Get Started!</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

const RESUME_TYPE_COMBO = 1;
const RESUME_TYPE_CHRONOLOGICAL = 2;
const RESUME_TYPE_TARGETED = 3;
const RESUME_TYPE_FUNCTIONAL = 4;

Wizard.defaultProps = {
    questions: [
        {
            id: 1,
            text: 'Are you looking to get hired for a specific type of job?',
            choices: [
                {
                    id: '',
                    text: 'I have experience in many different fields and am happy to secure a job within any of them.',
                    type: RESUME_TYPE_COMBO,
                },
                {
                    id: '',
                    text: 'I have a good work history in a few different fields and would be happy to secure anything that suits my experience.',
                    type: RESUME_TYPE_CHRONOLOGICAL,
                },
                {
                    id: '',
                    text: 'I have years of experience in one area and am only interested in securing the same type of position.',
                    type: RESUME_TYPE_TARGETED,
                },
                {
                    id: '',
                    text: "I don't have much professional experience, so I am looking for any job that would take me.",
                    type: RESUME_TYPE_FUNCTIONAL,
                },
            ]
        },
        {
            id: 2,
            text: 'How often have you been without employment for any period of time?',
            choices: [
                {
                    id: '',
                    text: 'Never, I have always had jobs. Except for the odd week or two between employers.',
                    type: RESUME_TYPE_COMBO,
                },
                {
                    id: '',
                    text: 'I have never really had a steady job.',
                    type: RESUME_TYPE_CHRONOLOGICAL,
                },
                {
                    id: '',
                    text: 'My employment history has several gaps in it.',
                    type: RESUME_TYPE_TARGETED,
                },
                {
                    id: '',
                    text: 'I have gone for periods without having employment, but I have always got back into my same line of work.',
                    type: RESUME_TYPE_FUNCTIONAL,
                },
            ]
        },
        {
            id: 3,
            text: 'What kind of work history do you have?',
            choices: [
                {
                    id: '',
                    text: 'I have been doing the same type of work for most of my life.',
                    type: RESUME_TYPE_COMBO,
                },
                {
                    id: '',
                    text: "I don't have any work experience.",
                    type: RESUME_TYPE_CHRONOLOGICAL,
                },
                {
                    id: '',
                    text: 'I have a steady work history with various employers.',
                    type: RESUME_TYPE_TARGETED,
                },
                {
                    id: '',
                    text: 'I have work experience but have had gaps between jobs.',
                    type: RESUME_TYPE_FUNCTIONAL,
                },
            ]
        },
    ]
};

export default Wizard;