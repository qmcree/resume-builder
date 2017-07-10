import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render((
    <App/>
), document.getElementById('root'));

registerServiceWorker();
