import { For } from 'solid-js';
import { Job } from './Job.tsx';
import style from './style.module.scss';

export function History({ data }) {
  return (
    <section class={style.css}>
      <h2>Work History</h2>
      <ul>
        <For each={data.jobs}>
          {(job) => <Job data={job} />}
        </For>
      </ul>
    </section>
  );
}
