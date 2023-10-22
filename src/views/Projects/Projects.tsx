import { Header } from '../../components/Header';
import { content } from './content.tsx';
import './Projects.scss';

const HeaderLeft = () => (
  <span>{content.header.title}</span>
);

export function Projects() {
  return (
    <div id={'projects'} class={'content'}>
      <Header left={<HeaderLeft />} />
    </div>
  );
}
