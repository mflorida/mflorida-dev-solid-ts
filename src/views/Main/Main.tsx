import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { History } from '../../components/History';

import './style.scss';

export function Main() {
  return (
    <main id={`main`}>
      <Header />
      <Profile />
      <History />
    </main>
  );
}
