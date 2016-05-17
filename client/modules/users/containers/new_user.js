import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewUser from '../components/new_user.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const usernameError = LocalState.get('REG_USERNAME_ERROR');
  const emailError = LocalState.get('REG_EMAIL_ERROR');
  const passwordError = LocalState.get('REG_PASSWORD_ERROR');

  onData(null, {usernameError,emailError,passwordError});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.users.create,
  clearErrors: actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewUser);
