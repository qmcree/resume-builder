import React, {Component} from "react";
import {Button, Input} from "reactstrap";

// TODO: implement order.
class SkillList extends Component {
    render() {
        return (
            <div>
                <Input type="select" id="availableSkills" onChange={this.props.handleSkillAdd}>
                    <option>Select Skill...</option>
                    {Object.keys(this.props.skillsAvailable).map(skillId => {
                        // Show skill as an option if it isn't already selected.
                        if (!this.props.skillIdsSelected[skillId]) {
                            return (
                                <option value={skillId}>{this.props.skillsAvailable[skillId]}</option>
                            );
                        }
                    })}
                </Input>
                <ul>
                    {Object.keys(this.props.skillIdsSelected).map(skillId =>
                        <li>
                            {this.props.skillsAvailable[skillId]}
                            <Button color="danger" size="sm" value={skillId}
                                    onClick={this.props.handleSkillRemove}>X</Button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default SkillList;