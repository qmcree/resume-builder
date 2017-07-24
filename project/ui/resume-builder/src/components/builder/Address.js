import React from "react";
import {Input} from "reactstrap";

const Address = function (props) {
    return (
        <div>
            <Input type="text" id="address1" placeholder="Line 1" value={props.line1}/>
            <Input type="text" id="address2" placeholder="Line 2" value={props.line2}/>
            <Input type="text" id="addressCity" placeholder="City" value={props.city}/>
            <Input type="text" id="addressState" placeholder="State (ex: TX, CA)" value={props.state}/>
        </div>
    );
};

export default Address;