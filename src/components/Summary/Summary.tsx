import './style.scss';

export function Summary({ data }) {
  return (
    <section class={'summary'}>
      <h2 class={'summary-title'}>{data.title}</h2>
      <div class={'summary-body'}>
        {data.body}
      </div>
    </section>
  );
}
