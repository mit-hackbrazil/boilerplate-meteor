import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { Blaze } from 'meteor/blaze';
import "./App.css";
import Menu from "../components/Menu/Menu";

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        console.log("user", Meteor.users.findOne(Meteor.userId()));
        this.setState({ user: Meteor.users.findOne(Meteor.userId()), id: Meteor.userId() });
    }

    render() {
        return (
            <div>
                <Menu />
                <h1>TEAM VIEWER{this.state.user}</h1>
            </div>
        );
    }
}