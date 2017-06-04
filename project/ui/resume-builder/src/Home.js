import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import questions from './questions.png';
import typing from './typing.png';
import resume from './resume.png';

class Home extends React.Component {
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
	    <div>
	      <Jumbotron>
	        <Container>
	          <Row>
	            <Col>
	              <h2>Build your Professional Resume!</h2>
	            </Col>
	          </Row>
	        </Container>
	      </Jumbotron>

      <div className="home-container">
        <div className="row media">
          <div className="col-sm-12">
            <h4>How it Works</h4>
          </div>
          <div className="col-sm-4">
            <img className="media-object" src={questions} width="128" alt="questions" />
            <p className="step-title">1. Answer a few Questions</p>
          </div>

          <div className="col-sm-4">
            <img className="media-object" src={typing} width="128" alt="typing" />
            <p className="step-title">2. Enter your Information</p>
          </div>

          <div className="col-sm-4">
            <img className="media-object" src={resume} width="128" alt="resume" />
            <p className="step-title">3. Download your Resume!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
          </div>
          <div className="col-sm-8">
            <form className="form-horizontal" role="form">
              <div className="form-group">
                  <div className="col-sm-12">
                      <p className="button-title">First step, tell us your name!</p>
                      <label><input type="text" className="form-control" id="name" name="name" placeholder="Enter Full Name"/></label>
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-12">
                      <button type="submit" className="btn btn-primary">Get Started!</button>
                  </div>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
    );
  }
}

export default Home;
