import React from "react";
import {Col, Container, Jumbotron, Row} from "reactstrap";
import stepOne from "../../images/step1.png";
import stepTwo from "../../images/step2.png";
import stepThree from "../../images/step3.png";
import Wizard from "../wizard/Wizard";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Build your Professional Resume</h2>
                                <p>Our resume builder tool allows you to create a personalized resume that suits your
                                    specific
                                    needs in 3 simple steps.</p>
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
                            <img className="media-object" src={stepOne} width="128" alt="questions"/>
                            <p className="step-title">Answer</p>
                        </div>

                        <div className="col-sm-4">
                            <img className="media-object" src={stepTwo} width="128" alt="typing"/>
                            <p className="step-title">Enter</p>
                        </div>

                        <div className="col-sm-4">
                            <img className="media-object" src={stepThree} width="128" alt="resume"/>
                            <p className="step-title">Download</p>
                        </div>
                    </div>

                    <Wizard/>
                </div>
            </div>
        );
    }
}

export default Home;
