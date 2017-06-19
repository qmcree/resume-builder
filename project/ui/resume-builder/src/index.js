import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
