import React from 'react';

var TodoItems = React.createClass({
	render: function() {
		var todoEntries = this.props.entries;

		function createTasks(item) {
			return <li key={item.key}>{item.text}</li>
		}

		var listItems = todoEntries.map(createTasks);

		return (
			<ul className="theList">
				{listItems}
			</ul>
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
			<div className="col-sm-12 todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} placeholder="enter task"/>
						<button type="submit">add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} />
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
	    <div className="resume-container">
	      <div className="row">
	      	<div className="col-sm-4">
	      	</div>
	      	<div className="col-sm-8">
	      		<form className="form-horizontal" role="form">
                    <div className="form-group">
                    	<div className="col-sm-9">
                    		<h3>Personal Information</h3>
                    	</div>
                        <label for="phone" className="col-sm-3 control-label">Phone Number</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Enter Phone Number"/>
                        </div>
                    </div>
                    <div className="form-group">
                    	<label for="email" className="col-sm-6 control-label">Email Address</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                    	<label for="objective" className="col-sm-6 control-label">Objective</label>
                        <div className="col-sm-9">
                            <textarea type="text" rows="2" className="form-control" id="objective" name="objective" placeholder="Your Objective">
                            </textarea>
                        </div>
                    </div>
                    <div className="form-group">
                    	<div className="col-sm-9">
                    		<h3>Skills</h3>
						</div>
                    </div>
                    <div className="form-group">
	                    <div className="col-sm-9">
	                    </div>
                    </div>
            	</form>
	      	</div>

	      	<div className="col-sm-8 task">
	      		<div>
		      		<TodoList/>
		      	</div>
	      	</div>

	      	

	      </div>
	    </div>
    );
  }
}

export default ResumeBuilder;
