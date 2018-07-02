import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import { FlowRouter } from 'meteor/kadira:flow-router';
//import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import App from '../views/containers/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});

FlowRouter.route('/team/:_id', {
  name: 'list.show',
  action() {
    mount(AppContainer, {
      main: <App />
    });
  },
});