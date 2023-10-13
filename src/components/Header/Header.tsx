import { content } from '../../content.tsx';
import style from './style.module.scss';

export function Header() {
  return (
    <h1 id={`page-header`} class={style.css}>
      <span>
        {content.header.name}
      </span>
      <span title={content.header.tooltip} style={{ 'font-size': '0.8em' }}>
        {content.header.role}
      </span>
    </h1>
  );
}
