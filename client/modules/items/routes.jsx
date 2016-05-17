import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import EditItem from './components/edit_item.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/edit', {
    name: '',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditItem />)
      });
    }
  });
}
