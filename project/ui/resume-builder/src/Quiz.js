import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Quiz extends React.Component {
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

      <div className="quiz-container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Resume Type</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
            fringilla vel, aliquet nec, vulputate eget, arcu.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 quiz">
            <br/>
            <h4>Are you looing to get hired for a specific type of job?</h4>
            <form role="form" id="job-type">
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    I have experience in many different fields and am happy 
                    to secure a job within any of them.
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    I have a good work history in a few different fields 
                    and would be happy to secure anything that suits my experience.
                  </Label>
                </FormGroup>
                <FormGroup check >
                  <Label check>
                    <Input type="radio" name="radio1"/>{' '}
                    I have years of experience in one area and am only 
                    interested in securing the same type of position.
                  </Label>
                </FormGroup>
                <FormGroup check >
                  <Label check>
                    <Input type="radio" name="radio1"/>{' '}
                    I don't have much professional experience, so I am 
                    looking for any job that would take me.
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
