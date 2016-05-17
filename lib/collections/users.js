import {Astro} from 'meteor/jagi:astronomy';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

export default User = Astro.Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    username: {
      type: String,
      validators: [
        {
          type: 'minLength',
          param: 6,
          message: 'Username has to have a minimum of 6 characters'
        }
      ]
    },
    emails: [ Object ],
    services: Object
  },
  // events: {
  //   afterInsert(event) {
  //     event.preventDefault();
  //     const _id = event.currentTarget._id;
  //     const password = event.currentTarget.services.password.bcrypt;
  //
  //     if (Meteor.isServer) {
  //       Accounts.setPassword(_id,password);
  //     }
  //   }
  // }
});
