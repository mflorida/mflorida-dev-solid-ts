import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
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
      <Summary data={content.summary} />
      <History data={content} />
    </div>
  );
}
