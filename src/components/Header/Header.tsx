import style from './style.module.scss';

// Empty component is needed to fill space since <h1> is a flexbox container
const Empty = () => <span></span>;

export function Header({ left = null, right = null }) {
  return (
    <h1 class={style.css}>
      {left || <Empty />}
      {right || <Empty />}
    </h1>
  );
}
