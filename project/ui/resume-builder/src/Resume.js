import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
      <div className = "container">
        <div className="row resume-header">
          <div className="col-sm-12">
            <h1>Ellis B. Redding</h1>
            <br/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <p>(555) 555-5555</p>
            <p>email@gmail.com</p>
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
          </div>

          <div className="col-sm-9">   
            <p>Enthusiastic and dependable cook with 15+ years of experience working in food service. Highly skilled 
            in consistently producing and presenting well-prepared food while keeping high sanitation standards in 
            check.
            </p>
            <br/>
            <h2>Professional Experience</h2>
            <h5>Cook</h5>
            <ul>
              <li>Clean and inspect gallery equipment, kitchen appliances, and work areas to ensure cleanliness and 
              functional operation.</li>
              <li>Clean and inspect gallery equipment, kitchen appliances, and work areas to ensure cleanliness and 
              functional operation.</li>
              <li>Clean and inspect gallery equipment, kitchen appliances, and work areas to ensure cleanliness and 
              functional operation.</li>
              <li>Clean and inspect gallery equipment, kitchen appliances, and work areas to ensure cleanliness and 
              functional operation.</li>
            </ul>
          </div>

      </div>
    </div>
    );
  }
}

export default Resume;
