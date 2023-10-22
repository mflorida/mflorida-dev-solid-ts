import './style.scss';

export function Profile({ data }) {
  return (
    <section id={`profile`}>
      <h2>Profile</h2>
      {data.profile}
    </section>
  );
}
