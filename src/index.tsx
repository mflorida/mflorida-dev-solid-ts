/* @refresh reload */
import { render } from 'solid-js/web';
import Main from './views/Main';

import './global.css';

render(
  () => <Main />,
  document.getElementById('site')!
);
