import React, { Component, useState } from "react";
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { useAuth0 } from "../react-auth0-spa";

export const NavMenu = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed((prev) => !prev.collapsed);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            Auth0Starter
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">
                  Counter
                </NavLink>
              </NavItem>

              {isAuthenticated && (
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/fetch-data">
                      Fetch data
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <Button size="sml" onClick={() => logout({})}>
                      Log out
                    </Button>
                  </NavItem>
                </>
              )}

              {!isAuthenticated && (
                <NavItem>
                  <Button size="sml" onClick={() => loginWithRedirect({})}>
                    Log in
                  </Button>
                </NavItem>
              )}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
