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

      <div className="resume-main-container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Ellis B. Redding</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
