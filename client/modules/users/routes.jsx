import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import NewUser from './containers/new_user.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/register', {
    name: 'register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });
}
