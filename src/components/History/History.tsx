import { For } from 'solid-js';
import { Job } from './Job.tsx';
import { content } from '../../content.tsx';
import style from './style.module.scss';

export function History() {
  return (
    <section id={`work-history`} class={style.css}>
      <h2>Work History</h2>
      <ul>
        <For each={content.jobs}>
          {(job) => <Job data={job} />}
        </For>
      </ul>
    </section>
  );
}
