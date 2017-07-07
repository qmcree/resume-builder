import React, {Component} from "react";
import {FormGroup, Input, Label} from "reactstrap";

class Question extends Component {
    state = {
        selectedChoiceValue: null
    };

    handleChange = (event) => {
        this.setState({selectedChoiceValue: event.target.value});
    };

    render() {
        return (
            <div className="col-sm-12 quiz">
                <FormGroup tag="fieldset">
                    <legend>{this.props.text}</legend>
                    {this.props.choices.map((choice) => {
                        return (
                            <Label key={choice.type}>
                                <Input type="radio" value={choice.type}
                                       checked={this.state.selectedChoiceValue === String(choice.type)}
                                       onChange={this.handleChange}/>
                                {choice.text}
                            </Label>
                        );
                    })}
                </FormGroup>
            </div>
        );
    }
}

export default Question;