import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

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
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to='/'>Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/builder">Builder</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/builder/export">Export</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;