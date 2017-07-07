import React from "react";
import {FormGroup, Input, Label} from "reactstrap";

const Question = function (props) {
    return (
            <div className="col-sm-12 quiz">
                <FormGroup tag="fieldset">
                    <legend>{props.text}</legend>
                    {props.choices.map((choice) => {
                        return (
                            <Label key={choice.type}>
                                <Input type="radio"
                                       name={props.id}
                                       value={choice.type}
                                       checked={props.selectedChoiceValue === String(choice.type)}
                                       onChange={props.handleChange}/>
                                {choice.text}
                            </Label>
                        );
                    })}
                </FormGroup>
            </div>
        );
};

export default Question;