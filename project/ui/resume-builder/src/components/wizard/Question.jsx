import React from "react";
import {FormGroup, Input, Label} from "reactstrap";

const Question = function (props) {
    return (
        <div className="col-sm-12 quiz">
            <FormGroup tag="fieldset">
                <legend>{props.text}</legend>
                {props.choices.map((choice) => {
                    return (
                        <FormGroup check>
                            <Label key={choice.type} check>
                                <Input type="radio"
                                       name={props.id}
                                       value={choice.type}
                                       checked={props.selectedChoiceValue === String(choice.type)}
                                       onChange={props.handleChange}/>
                                {choice.text}
                            </Label>
                        </FormGroup>
                    );
                })}
            </FormGroup>
        </div>
    );
};

export default Question;