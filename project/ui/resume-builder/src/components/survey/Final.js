import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import download from "../../images/download.png";


class Final extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <div className="final-main-container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Nice Work!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Form action="#" className="resume-form">
                            <FormGroup>
                                <Label for="location">Where are you located?</Label>
                                <Input type="text" pattern="[0-9]{5}" name="location" id="location"
                                       placeholder="Enter your zipcode"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="device">What kind of device are you using?</Label>
                                <select className="form-control" type="select" name="device" id="device">
                                    <option>Personal Computer - Home Internet</option>
                                    <option>Personal Computer - Public Internet</option>
                                    <option>Public Computer (e.g. Library)</option>
                                    <option>Friend or Family Member's Computer</option>
                                    <option>Smartphone</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Label for="arrive">How did you get here?</Label>
                                <select className="form-control" type="select" name="arrive" id="arrive">
                                    <option>Friend or Family Member</option>
                                    <option>Case Manager</option>
                                    <option>Parole Officer</option>
                                    <option>Flyer</option>
                                    <option>Community Event</option>
                                    <option>Internet</option>
                                    <option>Word of Mouth</option>
                                    <option>Radio</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Button>Submit</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Follow-Up</h4>
                        <p>A copy of your resume will be sent to your email address.</p>
                        <p>We hope to follow up with you regarding your job search and will let you know of upcoming
                            computer
                            and workforce training sessions that we have available in your area.</p>
                    </div>
                </div>
                <div className="row download">
                    <div className="col-sm-12">
                        <a href=""><img src={download} width="80"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Final;
