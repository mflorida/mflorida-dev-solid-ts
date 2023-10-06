import { content } from '../../content.tsx';
import './style.scss';

export function Profile() {
  return (
    <section id={`profile`}>
      <h2>Profile</h2>
      {content.profile}
    </section>
  );
}
