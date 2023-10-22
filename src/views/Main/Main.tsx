import { Route, Routes } from '@solidjs/router';
import { Home } from '../Home';
import { Resume } from '../Resume';
import { PageHeader } from './';

import style from './style.module.scss';
import './Main.scss';

export function Main() {
  return (
    <div id={'page'} class={style.page}>
      <PageHeader />
      <main id={'main'}>
        <Routes>
          <Route path={'/'} component={Home} />
          <Route path={'/home'} component={Home} />
          <Route path={'/resume'} component={Resume} />
          <Route path={'/cv'} component={Resume} />
        </Routes>
      </main>
    </div>
  );
}
