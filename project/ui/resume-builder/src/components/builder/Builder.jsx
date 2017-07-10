import React, {Component} from "react";
import {Input, Label} from "reactstrap";
import * as constants from "../constants";
import SkillList from "./SkillList";
import OccupationHistory from "./OccupationHistory";
import Education from "./Education";

class Builder extends Component {
    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        objective: '',
        skillsAvailable: [],
        skillsSelected: [],
        education: {},
        occupation: {},
    };

    render() {
        return (
            <div>
                <div>
                    <Label for="type">Resume Type</Label>
                    <Input type="select" id="type">
                        <option selected={this.props.typeId === constants.RESUME_TYPE_CHRONOLOGICAL}>Chronological
                        </option>
                        <option selected={this.props.typeId === constants.RESUME_TYPE_FUNCTIONAL}>Functional</option>
                        <option selected={this.props.typeId === constants.RESUME_TYPE_TARGETED}>Targeted</option>
                        <option selected={this.props.typeId === constants.RESUME_TYPE_COMBO}>Combination</option>
                    </Input>
                </div>
                <div>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" id="firstName" value={this.props.firstName}/>
                </div>
                <div>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" id="lastName" value={this.state.lastName}/>
                </div>
                <div>
                    <Label for="phone">Phone Number</Label>
                    <Input type="text" id="phone" value={this.state.phone}/>
                </div>
                <div>
                    <Label for="email">Email Address</Label>
                    <Input type="email" id="email" value={this.state.email}/>
                </div>
                <div>
                    <Label for="address1">Address</Label>
                    <Input type="text" id="address1" placeholder="Line 1" value={this.state.address1}/>
                    <Input type="text" id="address2" placeholder="Line 2" value={this.state.address2}/>
                </div>
                <div>
                    <Label for="objective">Objective</Label>
                    <Input id="objective" value={this.state.objective}/>
                </div>
                <div>
                    <Label>Skills</Label>
                    <SkillList availableSkills={this.state.skillsAvailable} selectedSkills={this.state.skillsSelected}/>
                </div>
                <div>
                    <Label>Education</Label>
                    <Education education={this.state.education}/>
                </div>
                <div>
                    <Label>Work History</Label>
                    <OccupationHistory occupation={this.state.occupation}/>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Builder;