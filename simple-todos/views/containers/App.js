import React from 'react';
import AccountsUIWrapper from "../components/AccountsUIWrapper";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <AccountsUIWrapper />
      </div>
    );
  }
}