import { Mongo } from 'meteor/mongo';
import 'simpl-schema';

export const Teams = new Mongo.Collection('teams');

Teams.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  members: {
    type: Array,
  },
  'members.$': {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  logo: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  link: {
    type: String
  },
  contacts: {
    type: [String]
  }
});

Teams.attachSchema(Teams.schema);