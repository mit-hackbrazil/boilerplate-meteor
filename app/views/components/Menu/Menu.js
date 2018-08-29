import React, { Component } from "react";
import AccountsUIWrapper from "../AccountsUIWrapper";
import {} from "./Menu.css";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar top-menu">top menu
            <AccountsUIWrapper />
            </div>
        );
    }
}