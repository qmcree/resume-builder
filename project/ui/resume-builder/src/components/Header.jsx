import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler} from "reactstrap";

class Header extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState((previousState) => ({
            // If it's closed, open it.
            // If it's open, close it.
            isOpen: !previousState.isOpen
        }));
    };

    render() {
        return (
            <Navbar inverse toggleable>
                <NavbarToggler right onClick={this.toggle}/>
                <NavbarBrand href="/">Resume Builder</NavbarBrand>
            </Navbar>
        )
    }
}

export default Header;