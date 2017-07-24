import React, {Component} from "react";
import {Input, Label} from "reactstrap";
import * as constants from "../constants";
import SkillList from "./SkillList";
import Education from "./Education";
import ExperienceList from "./ExperienceList";
import Address from "./Address";

class Builder extends Component {
    state = {
        phone: '5125551212',
        email: 'no@no.none',
        address: {
            line1: '123 Elm St',
            line2: 'Suite 204',
            city: 'Austin',
            state: 'TX',
        },
        objective: 'To be a cool dude right here. Lorem ipsum dolor sit amet.',
        skillsAvailable: {
            101: 'Respectful',
            102: 'Troubleshooter',
            103: 'Dependable',
            104: 'Willingness To Learn',
            105: 'Adaptable',
        },
        skillIdsSelected: {
            101: 1,
            103: 1,
            105: 1,
        },
        education: [
            {
                school: "Tulane University",
                degree: "PhD",
                field: "Computer Science",
                city: "New Orleans",
                state: "LA",
                startedAt: "2011-01-01", // Day doesn't matter.
                endedAt: "2014-05-01",
            },
            {
                school: "Foobar High School",
                degree: "GED",
                field: "",
                city: "San Francisco",
                state: "CA",
                startedAt: "2005-08-01", // Day doesn't matter.
                endedAt: "2007-05-01",
            },
        ],
        experience: [
            {
                title: "IT Support Specialist",
                company: "Acme Corp",
                city: "Hartford",
                state: "CT",
                startedAt: "2012-06-01",
                endedAt: "2012-10-01",
                tasks: [
                    "Offered technical solutions to quickly get users up and running again.",
                    "Continuously juggled more than one customer at a time.",
                ],
            },
            {
                title: "Business Advisor",
                company: "Apple, Inc.",
                city: "Cupertino",
                state: "CA",
                startedAt: "2011-01-01",
                endedAt: "2012-03-01",
                tasks: [
                    "Adhered to a continuous schedule of customer appointments offering guidance, knowledge, and even tips and training.",
                    "Quickly diagnosed product issues on the spot in store, explaining situations with patience and empathy.",
                ],
            }
        ],
    };

    handleSkillAdd = event => {
        const skillId = parseInt(event.target.value);

        if (skillId) {
            this.setState(function (prevState) {
                prevState.skillIdsSelected[skillId] = 1;
                return prevState;
            });
        }
    };

    handleSkillRemove = event => {
        const skillId = parseInt(event.target.value);

        this.setState(function (prevState) {
            delete prevState.skillIdsSelected[skillId];
        });
    };

    render() {
        return (
            <div>
                <div>
                    <Label for="type">Resume Type</Label>
                    <Input type="select" id="type" onChange={this.props.handleTypeChange}>
                        <option selected={this.props.typeId === constants.RESUME_TYPE_CHRONOLOGICAL}
                                value={constants.RESUME_TYPE_CHRONOLOGICAL}>Chronological
                        </option>
                        <option selected={this.props.typeId === constants.RESUME_TYPE_FUNCTIONAL}
                                value={constants.RESUME_TYPE_FUNCTIONAL}>Functional
                        </option>
                        <option selected={this.props.typeId === constants.RESUME_TYPE_TARGETED}
                                value={constants.RESUME_TYPE_TARGETED}>Targeted
                        </option>
                        <option selected={this.props.typeId === constants.RESUME_TYPE_COMBO}
                                value={constants.RESUME_TYPE_COMBO}>Combination
                        </option>
                    </Input>
                </div>
                <div>
                    <Label for="fullName">Full Name</Label>
                    <Input type="text" id="fullName" value={this.props.fullName}/>
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
                    <Address {...this.state.address}/>
                </div>
                <div>
                    <Label for="objective">Objective</Label>
                    <Input id="objective" value={this.state.objective}/>
                </div>
                <div>
                    <Label>Skills</Label>
                    <SkillList skillsAvailable={this.state.skillsAvailable}
                               skillIdsSelected={this.state.skillIdsSelected}
                               handleSkillAdd={this.handleSkillAdd}
                               handleSkillRemove={this.handleSkillRemove}/>
                </div>
                <div>
                    <Label>Education</Label>
                    <Education education={this.state.education}/>
                </div>
                <div>
                    <Label>Work Experience</Label>
                    <ExperienceList experience={this.state.experience}/>
                </div>
            </div>
        );
    }
}

export default Builder;