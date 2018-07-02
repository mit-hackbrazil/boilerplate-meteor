import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
 

import App from '../views/containers/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});