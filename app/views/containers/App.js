import React from 'react';
import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from "../components/AccountsUIWrapper";
import { Blaze } from 'meteor/blaze';

export default class App extends React.Component {
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
        <h1>Hello World{this.state.user}</h1>
        <AccountsUIWrapper />
      </div>
    );
  }
}