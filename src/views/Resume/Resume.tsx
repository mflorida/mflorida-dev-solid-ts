import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { History } from '../../components/History';

import { content } from './content.tsx';

import './style.scss';

const HeaderLeft = () => (
  <span>
    {content.header.name}
  </span>
);

const HeaderRight = () => (
  <span title={content.header.tooltip} style={{ 'font-size': '0.8em' }}>
    {content.header.role}
  </span>
);

export function Resume() {
  return (
    <div id={'resume'} class={'content'}>
      <Header left={<HeaderLeft />} right={<HeaderRight />} />
      <Profile data={content} />
      <History data={content} />
    </div>
  );
}
