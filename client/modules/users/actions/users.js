import {Accounts} from 'meteor/accounts-base';
import User from '/lib/collections/users.js';

export default {
  create({Meteor, LocalState, FlowRouter}, username, email, password) {
    if (!username) {
      return LocalState.set('REG_USERNAME_ERROR', 'Username is required.');
    }
    if (!email) {
      return LocalState.set('REG_EMAIL_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('REG_PASSWORD_ERROR', 'Password is required.');
    }

    LocalState.set('REG_USERNAME_ERROR', null);
    LocalState.set('REG_EMAIL_ERROR', null);
    LocalState.set('REG_PASSWORD_ERROR', null);

    const user = new User();
    user.username = username;
    user.emails = [
      {
        address: email
      }
    ];
    user.services = {
      password: {
        bcrypt: password
      }
    };

    user.validate({}, function (error) {
      if (error) {
        return LocalState.set('REG_USERNAME_ERROR', error.reason);
      }
      Accounts.createUser({username,email,password}, function (err) {
        if (err) {
          return LocalState.set('REG_USERNAME_ERROR', err.reason);
        }
        FlowRouter.go('/');
      });
    });
  },

  clearErrors({LocalState}) {
    return [
      LocalState.set('REG_USERNAME_ERROR', null),
      LocalState.set('REG_EMAIL_ERROR', null),
      LocalState.set('REG_PASSWORD_ERROR', null)
    ];
  }
};
