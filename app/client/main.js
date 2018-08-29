import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactLayout } from 'meteor/kadira:react-layout';

//import { BlazeLayout } from 'meteor/kadira:blaze-layout'; //--not using directly
import { mount } from 'react-mounter';

import AppLayout from '../views/containers/AppLayout';
import Team from "../views/containers/Team";
import App from "../views/containers/App";
/*
Meteor.startup(() => {
  render(<AppLayout />, document.getElementById('root'))
})
*/

FlowRouter.route('/', {
  name: 'Home',
  action: function () {
    ReactLayout.render(AppLayout, {
      content: <App />
    });
  }
});

FlowRouter.route('/team/:_id', {
  name: 'Team',
  action: function () {
    ReactLayout.render(AppLayout, {
      content: <Team />
    });
  }
});