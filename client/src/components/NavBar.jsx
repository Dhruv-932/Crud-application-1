import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const DataSphereTab = styled(NavLink)`
  font-size: 24px;
  margin-right: 80px;
  color: #ffa500; 
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ffa500;
  }

  &.active-link {
    color: #ffa500;
    border-bottom: 2px solid #ffa500;
  }
`;

const OtherTabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 30px; 
  color: white; 
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ffa500;
  }

  &.active-link {
    color: #ffa500;
    border-bottom: 2px solid #ffa500;
  }
`;

const NavBar = () => {
  return (
    <AppBar style={{ background: "#219C90" }}>
      <Toolbar>
        <DataSphereTab to="/" exact activeClassName="active-link">
         Data Sphere
        </DataSphereTab>
        <OtherTabs to="/all" activeClassName="active-link">
          All Users
        </OtherTabs>
        <OtherTabs to="/add" activeClassName="active-link">
          Add Users
        </OtherTabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
