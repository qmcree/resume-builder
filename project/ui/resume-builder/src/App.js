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
            <NavbarBrand href="/">EZ Resume</NavbarBrand>
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
              </Nav>
            </Collapse>
          </Navbar>

        {/* Body */}
        <div>
            <Route exact path="/" component={Home}/>
            <Route path ="/resume-builder" component={ResumeBuilder}/>
            <Route path ="/resume-quiz" component={Quiz}/>
        </div>
        </div>
      </Router>

    );
  }
}

export default App;
