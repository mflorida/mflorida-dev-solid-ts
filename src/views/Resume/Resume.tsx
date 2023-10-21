import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { History } from '../../components/History';

import style from './style.module.scss';

export function Resume() {
  return (
    <div id={'resume'} class={style.css}>
      <Header />
      <Profile />
      <History />
    </div>
  );
}
