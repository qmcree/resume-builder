import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


var TodoItems = React.createClass({
	render: function() {
		var todoEntries = this.props.entries;

		function createTasks(item) {
			return <li key={item.key}>{item.text}</li>
		}

		var listItems = todoEntries.map(createTasks);

		return (
			<ol className="theList">
				{listItems}
			</ol>
		);
	}
});

var TodoList = React.createClass({
	getInitialState: function() {
		return {
			items: []
		};
	},
	addItem: function(e) {
		var itemArray = this.state.items;

		itemArray.push(
			{
			text: this._inputElement.value,
			key: Date.now()
			}
		);
		this.setState({
			items: itemArray
		});

		this._inputElement.value="";

		e.preventDefault();
	},
	render: function() {
		return (
			<div>
				<div className="header">
					<Form onSubmit={this.addItem} className="resume-form">
						<FormGroup row>
							<Label for="Objective" sm={2}>Skills</Label>
							<Col sm={10}>
								<select className="form-control" ref={(a) => this._inputElement = a} type="select" name="skills" id="skills">
					            	<option disabled selected>Choose your top 10 skills</option>
					            	<option>Adaptable</option>
						            <option>Logical Thinking</option>
						            <option>Strong Work Ethic</option>
						            <option>Time Management</option>
						            <option>Dependable</option>
						            <option>Handling Pressure</option>
						            <option>Respectful</option>
						            <option>Customer Service</option>
						            <option>Troubleshooting</option>
						            <option>Willingness to Learn</option>
						            <option>Team Player</option>
						            <option>Resourceful</option>
							    </select>
						    </Col>
						</FormGroup>
						<FormGroup check row>
					          <Col sm={{ size: 10, offset: 2 }}>
					            <Button>Add</Button>
					          </Col>
					    </FormGroup>
					    <Col sm={{ size: 10, offset: 2 }} className="chosen-skills">
					    	<TodoItems entries={this.state.items} />
				    	</Col>
					</Form>
				</div>
			</div>
		);
	}
});

var WorkHistory = React.createClass({
	render: function() {
		return (
			<div>
				<div className="header">
					<Form action="#" className="resume-form">
						<FormGroup row>
							<Label for="Objective" sm={2}>Position</Label>
							<Col sm={10}>
								<Input className="form-control" type="text" name="position" id="position" placeholder="Enter your position (Example: Cook)"/>
						    </Col>
						</FormGroup>
						<FormGroup row>
							<Label for="Objective" sm={2}>Company</Label>
							<Col sm={10}>
								<Input className="form-control" type="text" name="company" id="company" placeholder="Enter the name of your employer"/>
						    </Col>
						</FormGroup>
						<FormGroup row>
							<Label for="Objective" sm={2}>Location</Label>
							<Col sm={10}>
								<Input className="form-control" type="text" name="location" id="location" placeholder="Enter your job location (Example: Austin, TX)"/>
						    </Col>
						</FormGroup>
						<FormGroup row>
							<Label for="Objective" sm={2}>Start Date</Label>
							<Col sm={10}>
								<Input className="form-control" type="text" name="startDate" id="startDate" placeholder="What year did you start working here?"/>
						    </Col>
						</FormGroup>
						<FormGroup row>
							<Label for="Objective" sm={2}>End Date</Label>
							<Col sm={10}>
								<Input className="form-control" type="text" name="endDate" id="endDate" placeholder="What year did you leave?"/>
						    </Col>
						</FormGroup>
						<FormGroup check row>
					          <Col sm={{ size: 10, offset: 2 }}>
					            <Button>Add</Button>
					          </Col>
					    </FormGroup>
					</Form>
				</div>
			</div>
		);
	}

});

class ResumeBuilder extends React.Component {
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
    	<div className = "resume-container">
	    	<div className="row">
	    		<div className="col-sm-7">
	    			<div className="col-sm-12">
		    			<h3>Personal Information</h3>
					    <Form action="#" className="resume-form">
					        <FormGroup row>
					          <Label for="phone" sm={2}>Phone</Label>
					          <Col sm={10}>
					            <Input type="tel" name="phone" id="phone" placeholder="Enter your phone number" />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="email" sm={2}>Email</Label>
					          <Col sm={10}>
					            <Input type="email" name="email" id="email" placeholder="Enter your email address" />
					          </Col>
					        </FormGroup>
					        <FormGroup row>
					          <Label for="Objective" sm={2}>Objective</Label>
					          <Col sm={10}>
					            <Input type="textarea" name="objective" id="objective" placeholder="Enter your
					            objective"/>
					          </Col>
					        </FormGroup>
					        <FormGroup check row>
					          <Col sm={{ size: 10, offset: 2 }}>
					            <Button>Submit</Button>
					          </Col>
					        </FormGroup>
					     </Form>
			      	</div>

				      <div className="col-sm-12">
		    			<h3>Skills</h3>
					     <TodoList/>
				      </div>
				      <div className="col-sm-12">
		    			<h3>Professional Experience</h3>
					    <Form action="" className="resume-form">
							<FormGroup row>
								<Label for="Objective" sm={2}>Position</Label>
								<Col sm={10}>
									<Input className="form-control" type="text" name="position" id="position" placeholder="Enter your position (Example: Cook)"/>
							    </Col>
							</FormGroup>
							<FormGroup row>
								<Label for="Objective" sm={2}>Responsibiity</Label>
								<Col sm={10}>
									<Input className="form-control" type="text" name="responsibility1" id="responsibility1" placeholder="Enter one of your main responsibilities"/>
							    </Col>
							</FormGroup>
							<FormGroup row>
								<Label for="Objective" sm={2}>Responsibiity</Label>
								<Col sm={10}>
									<Input className="form-control" type="text" name="responsibility2" id="responsibility2" placeholder="Enter one of your main responsibilites"/>
							    </Col>
							</FormGroup>
							<FormGroup row>
								<Label for="Objective" sm={2}>Responsibiity</Label>
								<Col sm={10}>
									<Input className="form-control" type="text" name="responsibility3" id="responsibility3" placeholder="Enter one of your main responsibilities"/>
							    </Col>
							</FormGroup>
							<FormGroup row>
								<Label for="Objective" sm={2}>Responsibiity</Label>
								<Col sm={10}>
									<Input className="form-control" type="text" name="responsibility4" id="4" placeholder="Enter one of your main responsibilities"/>
							    </Col>
							</FormGroup>
							<FormGroup check row>
						          <Col sm={{ size: 10, offset: 2 }}>
						            <Button>Add</Button>
						          </Col>
						    </FormGroup>
						</Form>
			      	</div>

				      <div className="col-sm-12">
		    			<h3>Work History</h3>
					     <WorkHistory/>
				      </div>

				</div>
				<div className="col-sm-5">
					<p>You're best suited for a:</p>
					<h3>Combination Resume</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
					Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		            </p>
		            <h3>Objective</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
					Aenean massa.
					</p>
					<h3>Roles</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
					Aenean massa.
					</p>
					<h3>Work History</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
					Aenean massa.
					</p>
					<h3>Education</h3>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
					Aenean massa.
					</p>
				</div>
			</div>
		</div>
    );
  }
}

export default ResumeBuilder;
