import React from "react";

class Resume extends React.Component {
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
            <div className="container">
                <div className="row resume-header">
                    <div className="col-sm-12">
                        <h1>Ellis B. Redding</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <p>(555) 555-5555<br/>
                            email@gmail.com</p>
                        <br/>
                        <h5>Skills</h5>
                        <ul className="side-resume">
                            <li>Adaptable</li>
                            <li>Logical Thinking</li>
                            <li>Strong Work Ethic</li>
                            <li>Time Management</li>
                            <li>Dependable</li>
                            <li>Handling Pressure</li>
                            <li>Respectful</li>
                            <li>Customer Service</li>
                            <li>Troubleshooter</li>
                            <li>Willingness to Learn</li>
                            <li>Team Player</li>
                            <li>Self Monitoring</li>
                        </ul>
                        <br/>
                        <br/>
                        <h5>Education</h5>
                        <p>Windham School District<br/>
                            Huntsville, TX200<br/>
                            GED</p>
                    </div>

                    <div className="col-sm-9">
                        <p>Enthusiastic and dependable cook with 15+ years of experience working in food service. Highly
                            skilled
                            in consistently producing and presenting well-prepared food while keeping high sanitation
                            standards in
                            check.
                        </p>
                        <h2>Professional Experience</h2>
                        <h5>Cook</h5>
                        <ul>
                            <li>Clean and inspect gallery equipment, kitchen appliances, and work areas to ensure
                                cleanliness and
                                functional operation.
                            </li>
                            <li>Direct activities of one or more workers who assist in preparing and serving meals.</li>
                            <li>Wash pots, pans, dishes, utensils, or other cooking equipment.</li>
                            <li>Compile and maintain records of food use and expenditures.</li>
                        </ul>
                        <h5>Home Health Aide</h5>
                        <ul>
                            <li>Plan, purchase, prepare, or serve meals to patients or other family members, according
                                to
                                prescribed diets.
                            </li>
                            <li>Perform a variety of duties as requested by client, such as obtaining household supplies
                                or running errands.
                            </li>
                            <li>Accompany clients to doctor's offices or on other trips outside the home, providing
                                transportation, assistance, and companionship.
                            </li>
                            <li>Change dressings.</li>
                        </ul>
                        <h5>Cashier</h5>
                        <ul>
                            <li>Receive payment by cash, check, credit cards, vouchers, or automatic debits.</li>
                            <li>Assist customers by providing information and resolving their complaints.</li>
                            <li>Maintain clean and orderly checkout areas and complete other general cleaning
                                duties, such as mopping floors and emptying trash cans.
                            </li>
                            <li>Calculate total payments rceived during a time period, and reconcile this with
                                total sales.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Resume;
