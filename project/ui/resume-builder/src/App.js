import './App.css';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
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
import Home from './Home';
import ResumeBuilder from './ResumeBuilder';
import Quiz from './Quiz';
import Resume from './Resume';
import Final from './Final';

class App extends Component {
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
      <Router>
        <div>
          {/*Main Nav*/}
          <Navbar inverse toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">Resume Builder</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/resume-quiz">Quiz</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/resume-builder">Builder</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/resume">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/final">Final</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

        {/* Body */}
        <div>
            <Route exact path="/" component={Home}/>
            <Route path ="/resume-builder" component={ResumeBuilder}/>
            <Route path ="/resume-quiz" component={Quiz}/>
            <Route path ="/resume" component={Resume}/>
            <Route path ="/final" component={Final}/>
        </div>
        </div>
      </Router>

    );
  }
}

export default App;
