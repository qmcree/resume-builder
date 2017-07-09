import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import ResumeBuilder from "./builder/ResumeBuilder";
import Final from "./survey/Final";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/builder" component={ResumeBuilder}/>
                    <Route exact path="/builder/export" component={Final}/>
                </Switch>
            </div>
        )
    }
}

export default Main;