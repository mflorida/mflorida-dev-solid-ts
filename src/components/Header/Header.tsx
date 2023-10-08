import { content } from '../../content.tsx';
import style from './style.module.scss';

export function Header() {
  return (
    <h1 id={`header`} class={style.header}>
      <span>{content.header.name}</span>
      {' '}
      <span>{content.header.title}</span>
    </h1>
  );
}
