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
	              <h1>Welcome to Resume Builder</h1>
	              <p>
	                <Button
	                  tag="a"
	                  color="success"
	                  size="large"
	                  href="http://reactstrap.github.io"
	                  target="_blank"
	                >
	                  View Reactstrap Docs
	                </Button>
	              </p>
	            </Col>
	          </Row>
	        </Container>
	      </Jumbotron>
	    </div>
    );
  }
}

export default Home;
