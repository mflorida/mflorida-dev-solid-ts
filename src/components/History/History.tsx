import { For } from 'solid-js';
import { Job } from './Job.tsx';
import { content } from '../../content.tsx';
import './style.scss';

export function History() {
  return (
    <section id={`jobs`}>
      <h2>Work History</h2>
      <For each={content.jobs}>
        {(job) => <Job data={job} />}
      </For>
    </section>
  );
}
