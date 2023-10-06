import { content } from '../../content.tsx';
import './style.scss';

export function Header() {
  return (
    <h1 id={`header`}>
      <span>{content.header.name}</span>
      {' '}
      <span>{content.header.title}</span>
    </h1>
  );
}
