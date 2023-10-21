/* @refresh reload */
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import { Main } from './views/Main';

import './global.css';

render(
  () => <Router><Main /></Router>,
  document.getElementById('root')!
);
