import React, {Component} from "react";
import Wizard from "./wizard/Wizard";
import * as constants from "./constants";
import Builder from "./builder/Builder";

class Main extends Component {
    state = {
        isWizardVisible: true,
        typeId: constants.RESUME_TYPE_COMBO,
        firstName: null,
    };

    showBuilder = (typeId, firstName) => {
        this.setState({
            isWizardVisible: false,
            typeId: typeId,  // TODO: validate it exists
            firstName: String(firstName),
        })
    };

    render() {
        return (
            <div>
                { this.state.isWizardVisible
                    ? <Wizard showBuilder={this.showBuilder}/>
                    : <Builder typeId={this.props.typeId} fullName={this.state.firstName}/> }
            </div>
        )
    }
}

export default Main;