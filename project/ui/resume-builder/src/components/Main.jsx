import React, {Component} from "react";
import Wizard from "./wizard/Wizard";
import * as constants from "./constants";
import Builder from "./builder/Builder";

class Main extends Component {
    state = {
        isWizardVisible: true,
        typeId: constants.RESUME_TYPE_COMBO,
        fullName: null,
    };

    showBuilder = (typeId, fullName) => {
        this.setState({
            isWizardVisible: false,
            typeId: typeId,  // TODO: validate it exists
            fullName: String(fullName),
        })
    };

    handleTypeChange = (event) => {
        this.setState({
            typeId: event.target.value
        })
    };

    render() {
        return (
            <div>
                { this.state.isWizardVisible
                    ? <Wizard showBuilder={this.showBuilder}/>
                    : <Builder typeId={this.state.typeId} handleTypeChange={this.handleTypeChange}
                               fullName={this.state.fullName}/> }
            </div>
        )
    }
}

export default Main;